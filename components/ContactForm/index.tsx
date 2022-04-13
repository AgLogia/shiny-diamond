import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    await fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });

    reset();
  };

  return (
    <>
      {isSubmitSuccessful && (
        <div className='row'>
          <div className='col text-center mb-4'>
            <h5>Message Sent!</h5>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='form-field'>
              <input
                type='text'
                {...register('name', { required: true })}
                name='name'
                placeholder='Name'
              />
              <p>{errors.name?.type === 'required' && 'Name is required'}</p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='form-field'>
              <input
                type='text'
                {...register('lastName', { required: true })}
                name='lastName'
                placeholder='Last Name'
              />
              <p>
                {errors.lastName?.type === 'required' &&
                  'Last Name is required'}
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='form-field'>
              <input
                type='email'
                {...register('email', { required: true })}
                name='email'
                placeholder='Email'
              />
              <p>{errors.email?.type === 'required' && 'Email is required'}</p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='form-field'>
              <select
                className='form-control'
                {...register('service', { required: true })}
                name='service'
              >
                <option>Service</option>
                <option>Real Estate Photography</option>
                <option>Virtual Tour</option>
                <option>Virtual Staging</option>
                <option>4K Video Tour</option>
                <option>Brochures and Features</option>
                <option>Drone Photos and Videos</option>
                <option>Agent Portrait</option>
                <option>Website Development</option>
                <option>All Of The Above</option>
              </select>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='form-field'>
              <textarea
                {...register('message')}
                name='message'
                placeholder='Message'
              ></textarea>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='form-submit'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='theme-btn'
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default ContactForm;
