import { ErrorMessageComponent } from '@/components/ErrorMessage.component';

interface InputFormComponentProps {
  label: string,
  errorMessage: string,
  form: { [key: string]: string | boolean };
  validationError: { [key: string]: boolean };
  formProperty: string;
  setFieldOfForm: (field: string, value: string) => void;
}

export function InputFormComponent({ label = '', errorMessage = '', form = {}, validationError = {}, formProperty = '', setFieldOfForm }: InputFormComponentProps) {

  return (
    <div className='flex flex-col gap-1'>
      <span className='text-sm font-semibold'>{label}:</span>
      <input
        type="text"
        className={`${validationError[formProperty] ? 'border-textColorError focus:border-textColorError' : 'border-primaryColor1 focus:border-primaryColor3'} border-2 py-[4px] px-2 outline-none focus:outline`}
        value={form[formProperty] as string}
        onChange={(e) => setFieldOfForm(formProperty, e.target.value)}
      />
      {validationError[formProperty] &&
        <ErrorMessageComponent text={errorMessage} />
      }
    </div>
  )
}