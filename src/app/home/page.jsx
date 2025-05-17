"use client";

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-gray-100">
      <Header />
      
      <main className="flex-grow flex flex-col items-center px-6 py-12">
        <h1 className="text-5xl font-extrabold mb-8 text-center drop-shadow-lg w-full max-w-3xl">
          История колледжа
        </h1>

        <p className="text-lg leading-relaxed mb-12 max-w-3xl text-center">
          Приказом Высшего Совета народного хозяйства СССР от 25 сентября 1929 г. №1276 образован и передан в подчинение Народного комиссариата тяжелой промышленности Новосибирский машиностроительный техникум, который разместился в здании школы ФЗУ на станции Кривощёково. Свою деятельность техникум начал 15 ноября 1929 г. Так начинается история Государственного бюджетного профессионального образовательного учреждения Новосибирской области «Новосибирский авиационный технический колледж имени Б.С. Галущака» (далее во всех вариантах наименования – Учреждение).

С 20 февраля 1931 г. Учреждение стало именоваться «Новосибирский техникум сельскохозяйственных машин», а с 8 апреля 1933 – «Новосибирский техникум машиностроения». В 1936-1937 гг. в Новосибирске на базе завода горного оборудования был создан авиационный завод. В ноябре 1937 с заводского аэродрома взлетел первый самолет. Развивающееся предприятие остро нуждалось в квалифицированных рабочих, техниках, инженерах. Уже в январе 1937 г. машиностроительный техникум был передан в ведение Глававиапрома и переименован в авиационный техникум, а с осени стал готовить специалистов по вновь открытым специальностям: конструирование самолетов, производство самолетов.
        </p>

        {/* Галерея фото */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
          <img 
            src="/images/natk1.jpg"
            alt="Фото колледжа 1" 
            className="rounded-lg shadow-lg object-cover w-full h-48"
          />
          <img 
            src="/images/natk2.jpg" 
            alt="Фото колледжа 2" 
            className="rounded-lg shadow-lg object-cover w-full h-48"
          />
          <img 
            src="/images/natk3.jpg"
            alt="Фото колледжа 3" 
            className="rounded-lg shadow-lg object-cover w-full h-48"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}




