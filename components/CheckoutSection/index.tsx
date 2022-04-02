import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const CheckoutSection = () => {
  // states
  const [tabs, setExpanded] = React.useState({
    cupon: false,
    billing_adress: true,
    payment: true,
  });
  const [forms, setForms] = React.useState({
    cupon_key: '',
    fname: '',
    lname: '',
    country: '',
    dristrict: '',
    address: '',
    post_code: '',
    email: '',
    phone: '',
    note: '',

    payment_method: 'cash',
    card_type: '',

    fname2: '',
    lname2: '',
    country2: '',
    dristrict2: '',
    address2: '',
    post_code2: '',
    email2: '',
    phone2: '',

    card_holder: '',
    card_number: '',
    cvv: '',
    expire_date: '',
  });

  const [dif_ship, setDif_ship] = React.useState(false);

  // // tabs handler
  // function faqHandler(name) {
  //   setExpanded({
  //     cupon: false,
  //     billing_adress: false,
  //     payment: false,
  //     [name]: !tabs[name],
  //   });
  // }

  // forms handler
  const changeHandler = (e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
    // setForms({ ...forms, [e.target.name]: e.target.value });
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
                  // onClick={() => faqHandler('billing_adress')}
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
                    <form className='cuponForm'>
                      <Grid container spacing={3}>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label='First Name'
                            name='fname'
                            value={forms.fname}
                            onChange={(e) => changeHandler(e)}
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
                            label='Last Name'
                            name='lname'
                            value={forms.lname}
                            onChange={(e) => changeHandler(e)}
                            type='text'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <InputLabel id='demo-simple-select-filled-label'>
                            Age
                          </InputLabel>
                          <FormControl
                            className='formSelect'
                            fullWidth
                            variant='filled'
                          >
                            <Select
                              labelId='demo-simple-select-filled-label'
                              id='demo-simple-select-filled'
                              value={forms.country}
                              name='country'
                              onChange={(e) => changeHandler(e)}
                            >
                              <MenuItem value=''>
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label='Dristrict'
                            name='dristrict'
                            value={forms.dristrict}
                            onChange={(e) => changeHandler(e)}
                            type='text'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            multiline
                            rows='3'
                            label='Address'
                            name='address'
                            value={forms.address}
                            onChange={(e) => changeHandler(e)}
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
                            label='Post Code'
                            name='post_code'
                            value={forms.post_code}
                            onChange={(e) => changeHandler(e)}
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
                            label='Email Adress'
                            name='email'
                            value={forms.email}
                            onChange={(e) => changeHandler(e)}
                            type='email'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label='Phone No'
                            name='phone'
                            value={forms.phone}
                            onChange={(e) => changeHandler(e)}
                            type='text'
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className='formInput radiusNone'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            multiline
                            label='Order Notes'
                            placeholder='Note about your order'
                            name='note'
                            value={forms.note}
                            onChange={(e) => changeHandler(e)}
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
                    <h4>Cart Total</h4>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Polygonal Vasei x 8</TableCell>
                          <TableCell align='right'>$25</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Marble Side Table x 3</TableCell>
                          <TableCell align='right'>$125</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Black Timber Chairs x 2</TableCell>
                          <TableCell align='right'>$225</TableCell>
                        </TableRow>
                        <TableRow className='totalProduct'>
                          <TableCell>Total product</TableCell>
                          <TableCell align='right'>$464</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sub Price</TableCell>
                          <TableCell align='right'>$2500</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <b>Total Price</b>
                          </TableCell>
                          <TableCell align='right'>
                            <b>$3200</b>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CheckoutSection;
