import { IconBrandWhatsapp } from "@tabler/icons-react";

export function WhatsappComponent() {

  return (
    <a href='https://wa.me/613041566?text=¡Hola!.%20%20Quiero%20más%20información.' target='_blank' className='fixed bottom-6 right-3 bg-whatsapp flex flex-row items-center cursor-pointer p-3 rounded-xl'>
      <IconBrandWhatsapp color="white" size={40} />
      <span className="text-whiteColor text-lg font-bold"></span>
    </a>
  )
}