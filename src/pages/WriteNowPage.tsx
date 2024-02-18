import { useForm } from 'react-hook-form';
import { Button, DateTimePicker, Nav, RichInput } from 'components';

export function WriteNowPage() {
  const { register, handleSubmit } = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever Agora</h1>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="destinationName">Nome completo</label>
          <input {...register('destinationName')} type="text" />
          <label htmlFor="destinationAddress">E-mail</label>
          <input {...register('destinationAddress')} type="email" />
          <label htmlFor="dueDate">Data</label>
          <DateTimePicker />
          <label htmlFor="subject">Assunto</label>
          <input {...register('subject')} type="text" />
          <label htmlFor="body">Mensagem</label>
          <RichInput />
          <Button type="submit" variant="primary">
            Enviar
          </Button>
        </form>
      </div>
    </>
  );
}
