import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import {
  DateTimePicker
} from '@material-ui/pickers';
import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RootStoreContext } from '../../stores/RootStore';

const CheckoutSection = observer(() => {
  const { register, formState: { errors, isSubmitting }, handleSubmit, reset, control } = useForm();
  const store = useContext(RootStoreContext);

  const [tabs, setExpanded] = React.useState({
    cupon: false,
    billing_adress: true,
    payment: true,
  });

  const onSubmit = async (data: any) => {

    data['appointmentDate'] = new Date(data.appointment).toLocaleString('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })

    data['appointmentTime'] = new Date(data.appointment).toLocaleString('en', {
      hour: '2-digit',
      minute: '2-digit'
    })

    await fetch('/api/booking', {
      method: 'post',
      body: JSON.stringify({
        info: data,
        items: store.cartItems,
        total: store.getTotal(),
        subTotal: store.getSubTotal(),
        discount: store.getDiscount(),
        taxes: store.getTax()
      }),
    });

    reset();
  };

  return (
    <Fragment>
      <Grid className='checkoutWrapper section-padding'>
        <Grid className='container' container>
          <Grid item md={6} xs={12}>
            <Grid className='cuponWrapper'>
              <Grid className='cuponWrap checkoutCard'>
                <Button
                  className='collapseBtn'
                  fullWidth
                >
                  Booking Information
                  <span>
                    {tabs.billing_adress ? (
                      <i className='fa fa-minus'></i>
                    ) : (
                      <i className='fa fa-plus'></i>
                    )}{' '}
                  </span>
                </Button>
                <Collapse in={tabs.billing_adress} timeout='auto' unmountOnExit>
                  <Grid className='chCardBody'>
                    <form id='checkout-form' onSubmit={handleSubmit(onSubmit)} className='cuponForm'>
                      <Grid container spacing={3}>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label='First Name*'
                            {...register('name', { required: true })}
                            name='name'
                            type='text'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                          <p>
                            {errors.name?.type === 'required' && 'Name is required'}
                          </p>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label='Last Name*'
                            {...register('lastName', { required: true })}
                            name='lastName'
                            type='text'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                          <p>
                            {errors.lastName?.type === 'required' && 'Last Name is required'}
                          </p>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            multiline
                            rows='3'
                            label='House Address*'
                            {...register('address', { required: true })}
                            name='address'
                            type='text'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                          <p>
                            {errors.address?.type === 'required' && 'Address is required'}
                          </p>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label='Lock box'
                            {...register('lockbox')}
                            name='lockbox'
                            type='text'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label='Email Address*'
                            {...register('email', { required: true })}
                            name='email'
                            type='email'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                          <p>
                            {errors.email?.type === 'required' && 'Email is required'}
                          </p>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label='Phone No*'
                            {...register('phone', { required: true })}
                            name='phone'
                            type='text'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                          <p>
                            {errors.phone?.type === 'required' && 'Phone is required'}
                          </p>
                        </Grid>
                        <Grid item xs={12}>

                          <Controller
                            control={control}
                            name='appointment'
                            defaultValue={new Date()}
                            render={({ field }) => (
                              <DateTimePicker 
                                fullWidth 
                                label='Appointment*' 
                                value={new Date()} 
                                onChange={(date) => field.onChange(date)}
                                name="appointment"
                                className='formInput radiusNone'
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                          )}
                          />
                          
                          <p>
                            {errors.appointment?.type === 'required' && 'Appointment is required'}
                          </p>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            multiline
                            label='Order Notes'
                            placeholder='Note about your order'
                            {...register('note')}
                            name='note'
                            type='text'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone note'
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Collapse>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid className='cartStatus'>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid className='cartTotals'>
                    <h4>Services</h4>
                    <Table>
                      <TableBody>
                      {store.cartItems.map((item, i) => (
                        <TableRow key={i}>
                          <TableCell>{item.desc}</TableCell>
                          <TableCell align='right'>${(item.price * item.qnt).toFixed(2)}</TableCell>
                        </TableRow>
                      ))}

                        <TableRow className='totalProduct'>
                          <TableCell>Discount</TableCell>
                          <TableCell align='right'>-${store.getDiscount()}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sub Price</TableCell>
                          <TableCell align='right'>${store.getSubTotal()}</TableCell>
                        </TableRow>
                        <TableRow className='totalProduct'>
                          <TableCell>HST</TableCell>
                          <TableCell align='right'>${store.getTax()}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <b>Total Price</b>
                          </TableCell>
                          <TableCell align='right'>
                            <b>${store.getTotal()}</b>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item className='text-end mx-4'>
              <button form="checkout-form" disabled={isSubmitting} className='theme-btn mt-5'>Book now</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
});

export default CheckoutSection;
