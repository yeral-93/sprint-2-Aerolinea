import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DivPayment, InformationCash, PersonData } from './StylePayment';
import paypal from '../../assets/paypal.svg'
import creditCard from '../../assets/credit_card_FILL0_wght400_GRAD0_opsz48.svg'
import payments from '../../assets/payments_FILL0_wght400_GRAD0_opsz48.svg'
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(3,'El nombre debe de tener minimo 3 caracteres')
  .max(15,'El nombre debe de tener maximo 15 caracteres')
  .required('El nombre es obligatorio'),
  lastname: Yup.string()
  .min(3,'El apellido debe de tener minimo 3 caracteres')
  .max(15,'El apellido debe de tener maximo 15 caracteres')
  .required('El apellido es obligatorio'),
  birthdate: Yup.date()
  .required('La fecha de nacimiento es obligatoria'),
  gender: Yup.string()
});

const validationCash = Yup.object().shape({
  cardNumber: Yup.number()
  .min(10,'El nombre debe de tener minimo 10 caracteres')
  .max(10,'El nombre debe de tener maximo 10 caracteres')
  .required('El numero de tarjeta es obligatorio'),
  expirationDate: Yup.date()
  .required('La fecha de expiración es obligatoria'),
  cvv: Yup.number()
  .required('El CVV es obligatorio'),
});

const initialValues = {
  name:'',
  lastname:'',
  birthdate:'',
  gender:'',

}

const initialCash = {
  cardNumber:'',
  expirationDate:'',
  cvv:'',
}

const TicketPayment = () => {
  const navigate = useNavigate()
  const onClikPagarViaje = () => {
    navigate ('informacion')}

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit:(values, {setSubmitting}) => {
      console.log('valores',values);
      setTimeout(() => {
        setSubmitting(false);
      }, 400)
    },
  });

  const formikCash = useFormik({
    initialCash,
    validationCash,
    onSubmit:(values, {setSubmitting}) => {
      console.log('valores',values);
      setTimeout(() => {
        setSubmitting(false);
      }, 400)
    },
  });

  return (
    <DivPayment>
       <h2>
        Informacion de pasajeros y pago</h2>
        <PersonData>
        <section>
        <h2>Clientes</h2>
        <ul>
          <li><button>Adulto 1</button></li>
          <li><button>Adulto 2</button></li>
        </ul>
      </section>
      <div>
        <h3>Adulto 1 </h3>
        <h5>El nombre del pasajero debe de coincidir con los documentos de viaje.</h5>
        <form onSubmit={formik.handleSubmit}>
          
          <label htmlFor="">Nombre </label>
        <input type="text" name='name' placeholder='Nombre del usuario' {...formik.getFieldProps('name')}/>
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
        
        <label htmlFor="">Apellido </label>
         <input type="text" name='lastname' placeholder='Apellido del usuario' {...formik.getFieldProps('lastname')}/>
        {formik.touched.lastname && formik.errors.lastname && <div>{formik.errors.lastname}</div>}
        
        <label htmlFor="">Fecha de nacimiento </label>
        <input type="date" name='birthdate' {...formik.getFieldProps('birthdate')}/>
        {formik.touched.birthdate && formik.errors.birthdate && <div>{formik.errors.birthdate}</div>}
        
        <fieldset>
        <legend>Género</legend>
        <input type="radio" name='gender' value='femenino' {...formik.getFieldProps('gender')}/>
        {formik.touched.gender && formik.errors.gender && <div>{formik.errors.gender}</div>}
        <label htmlFor="">Femenino</label>
        <input type="radio" name='gender' value='masculino'{...formik.getFieldProps('gender')}/>
        {formik.touched.gender && formik.errors.gender && <div>{formik.errors.gender}</div>}
        <label htmlFor="">Masculino</label>
        <input type="radio" name='gender' value='otro' {...formik.getFieldProps('gender')}/>
        {formik.touched.gender && formik.errors.gender && <div>{formik.errors.gender}</div>}
        <label htmlFor="">Otro</label>
        </fieldset>
        
        <button type='submit' disabled={formik.isSubmitting}>Continuar</button>
         </form>
        
        </div>
        </PersonData>
        <h2>Selecciona tu forma de pago</h2>
        <InformationCash>
        <section>
          <h4>Formas de pago</h4>
          <ul>
          <li><button><img src={creditCard} alt="paypal" />Tarjeta de Debito/Credito</button></li>
          <li><button><img src={paypal} alt="paypal" /> PayPal</button></li>
          <li><button><img src={payments} alt="paypal" />Pago en efectivo</button></li>
        </ul>
          </section>
        <div>
          <h4>Ingresa los datos de tu tarjeta</h4>
          <form onSubmit={formikCash.handleSubmit}>
            <input type="number" name='cardNumber' placeholder='Número de tarjeta' {...formikCash.getFieldProps('cardNumber')}/>
            {formikCash.touched.cardNumber && formikCash.errors.cardNumber && <div>{formikCash.errors.cardNumber}</div>}
            <span>
            <label htmlFor="">Fecha de expiración</label>
            <input type="date" name='expirationDate' {...formikCash.getFieldProps('expirationDate')}/>
            {formikCash.touched.expirationDate && formikCash.errors.expirationDate && <div>{formikCash.errors.expirationDate}</div>}
            </span>
            <input type="number" name='cvv' placeholder='CVV' {...formikCash.getFieldProps('cvv')}/>
            {formikCash.touched.cvv && formikCash.errors.cvv && <div>{formikCash.errors.cvv}</div>}
            <button type='submit' disabled={formikCash.isSubmitting} onClick={ onClikPagarViaje}>Pagar mi viaje</button>
          </form>
        </div>
        </InformationCash>
    </DivPayment>
  )
}

export default TicketPayment