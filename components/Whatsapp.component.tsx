import { IconBrandWhatsapp } from "@tabler/icons-react";

export function WhatsappComponent() {

  return (
    <a href='https://wa.me/613041566?text=¡Hola!%20Estoy%20buscando%20apoyo%20y%20me%20gustaría%20reservar%20una%20cita%20contigo.' target='_blank' className='fixed bottom-6 right-3 bg-whatsapp flex flex-row items-center cursor-pointer p-2 rounded-xl'>
      <IconBrandWhatsapp color="white" size={30} />
      <span className="text-whiteColor text-lg font-bold"></span>
    </a>
  )
}

