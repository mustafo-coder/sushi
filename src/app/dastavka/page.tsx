import Image from "next/image";

export default function Page() {
  return (
    <div className="container flex flex-col gap-10">
      <div className="flex items-center">
        <h2 className="text-[40px] font-bold max-md:text-3xl">
          Доставка
        </h2>
        <Image src={"/ic 1.svg"} width={40} height={64} alt="img" />
      </div>
      <div className="flex justify-around max-[1080px]:flex-col max-[1080px]:items-center max-[1080px]:gap-10">
        <div className="flex items-center gap-5 max-md:flex-col">
          <Image src={"/01.svg"} width={264} height={196} alt="img" />
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Зеленая зона</h3>
            <p>
              Доставка: <span className="font-bold">до 29 мин</span>
            </p>
            <p>
              Минимальная сумма заказа:<span className="font-bold"> 600 ₽</span>
            </p>
            <p>
              Доставляем <span className="font-bold">БЕСПЛАТНО</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 max-md:flex-col">
          <Image src={"/02.svg"} width={264} height={196} alt="img" />
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Желтая зона</h3>
            <p>
              Доставка: <span className="font-bold">до 59 мин</span>
            </p>
            <p>
              Минимальная сумма заказа:<span className="font-bold"> 800 ₽</span>
            </p>
            <p>
              Доставляем <span className="font-bold">БЕСПЛАТНО</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <iframe
          className="border-0 w-full p-0 m-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24309.682136134594!2d71.7979648!3d40.3931136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8367c88bd0e3%3A0xd42eeccb906be481!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQs9C-0YDQvtC00YHQutC-0Lkg0YDRi9C90L7Qug!5e0!3m2!1sru!2s!4v1737727212318!5m2!1sru!2s"
          width="600"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          <Image src={"/ic info.svg"} width={40} height={50} alt="img" />
          <h2 className="text-xl font-bold">Информация</h2>
        </div>
        <div className="flex flex-col gap-5">
          <p>
            Сервис доставки суши в Краснодаре «Рикша» предлагает чрезвычайно
            удобный механизм доставки и оплаты. Мы считаем, что наши стандарты
            работы должны быть классикой и комфортом для заказчика.
            <span className="font-bold">
              Прием заказов на доставку с 11:00 до 22:30
            </span>
            .
          </p>
          <p>
            Итак, начнем по доставке. Мы делим Краснодар на зоны доставки —
            зеленую и желтую. Для каждой зоны мы четко определяем время приезда
            курьера и в случае задержки Вы получаете приятный сюрприз, о котором
            мы поговорим чуть позже. Для каждой из зон доставка является
            абсолютно бесплатной.
          </p>
          <p>
            Доставка в зеленую зону Краснодара — до 29 минут (с 10:00 до 23:00.
            В другое время доставка в зеленую зону до 59 минут). Доставка в
            желтую зону — до 59 минут. Мы очень ценим Ваше время, поэтому всегда
            стараемся уложиться в минимальные сроки и измеряем время минутами,
            ведь каждая минута важна. Согласитесь, приятно получить вкусные суши
            в течение 29 минут, правда?
          </p>
          <p>
            Если курьер опаздывает, Вы получаете не только извинения, но и
            промокод на бесплатный ролл при следующем заказе!
          </p>
        </div>
      </div>
      <div className="flex flex-col max-md:items-center gap-16">
        <div className="flex gap-3">
          <h2 className="text-[40px] font-bold max-md:text-3xl">Оплата</h2>
          <Image src={"/ic 2.svg"} width={40} height={50} alt="img" />
        </div>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col border max-w-[392px] h-[233px] items-center text-center max-md:my-5">
            <Image
              className="relative -top-8"
              src={"/Frame 121.png"}
              width={64}
              height={64}
              alt="img"
            />
            <h2 className="text-xl font-bold ">Оплата наличными</h2>
            <p>
              Рассчитывайтесь за свои любимые суши Рикша наличными при
              получении.
            </p>
          </div>
          <div className="flex flex-col border max-w-[392px] h-[233px] items-center text-center max-md:my-5">
            <Image
              className="relative -top-8 bg-white"
              src={"/Frame 119.png"}
              width={64}
              height={64}
              alt="img"
            />
            <h2 className="text-xl font-bold">Оплата наличными</h2>
            <p>
              Рассчитывайтесь за свои любимые суши Рикша наличными при
              получении.
            </p>
          </div>
          <div className="flex flex-col border max-w-[392px] h-[233px] items-center text-center max-md:my-5">
            <Image className="relative -top-8 bg-white" src={"/Frame 120.svg"} width={64} height={64} alt="img" />
            <div className="pb-5">
               <h2 className="text-xl font-bold">Оплата наличными</h2>
            <p>
              Рассчитывайтесь за свои любимые суши Рикша наличными при
              получении.
            </p> 
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
