import { useForm } from 'react-hook-form';

const Discuss = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
  };

  return (
    <div className='wpo-service-single-item'>
      <div className='wpo-service-contact-area'>
        <div className='wpo-contact-title'>
          <h2>Have project in mind? Let's discuss</h2>
          <p>
            Get in touch with us to see how we can help you with your project
          </p>
        </div>
        <div className='wpo-contact-form-area'>
          <form method='post' onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className='row'>
              <div className='col col-lg-6 col-md-6 col-12'>
                <div className='form-field'>
                  <input
                    className='form-control'
                    {...register('name', { required: true })}
                    type='text'
                    name='name'
                    placeholder='Your Name*'
                  />
                  <p>{errors.name?.type === 'required' && "Name is required"}</p>
                </div>
              </div>
              <div className='col col-lg-6 col-md-6 col-12'>
                <div className='form-field'>
                  <input
                    className='form-control'
                    {...register('email', { required: true })}
                    type='email'
                    name='email'
                    placeholder='Your Email*'
                  />
                  <p>{errors.email?.type === 'required' && "Email is required"}</p>

                </div>
              </div>
              <div className='col col-lg-12 col-12'>
                <div className='form-field'>
                  <select
                    className='form-control'
                    {...register('service', { required: true })}
                    name='service'
                  >
                    <option disabled>Services*</option>
                    <option>Real Estate Photography</option>
                    <option>Complete Interior</option>
                    <option>Exterior Design</option>
                  </select>
                  <p>{errors.service?.type === 'required' && "Please Select a Service"}</p>
                </div>
              </div>
              <div className='fullwidth col col-lg-12 col-12'>
                <textarea
                  className='form-control'
                  {...register('note')}
                  name='note'
                  id='note'
                  placeholder='Message...'
                ></textarea>
              </div>
            </div>
            <div className='submit-area'>
              <button type='submit' className='theme-btn-s4'>
                Send Massege
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
