import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Revolution {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: string;
  impact: string;
  details: string[];
}

const revolutions: Revolution[] = [
  {
    id: 1,
    year: '3500 до н.э.',
    title: 'Изобретение письменности',
    description: 'Появление первых письменных систем в Месопотамии и Египте',
    icon: 'ScrollText',
    impact: 'Возможность фиксировать и передавать знания через поколения',
    details: [
      'Клинопись в Месопотамии',
      'Иероглифы в Древнем Египте',
      'Создание первых библиотек',
      'Развитие администрирования и законодательства'
    ]
  },
  {
    id: 2,
    year: '1440',
    title: 'Печатный станок Гутенберга',
    description: 'Изобретение книгопечатания с подвижными металлическими литерами',
    icon: 'Book',
    impact: 'Массовое распространение знаний и доступность образования',
    details: [
      'Удешевление производства книг',
      'Стандартизация текстов',
      'Развитие науки и Реформации',
      'Рост грамотности населения'
    ]
  },
  {
    id: 3,
    year: '1837',
    title: 'Электрический телеграф',
    description: 'Изобретение телеграфа Сэмюэлем Морзе',
    icon: 'Radio',
    impact: 'Мгновенная передача информации на большие расстояния',
    details: [
      'Азбука Морзе',
      'Трансатлантический кабель',
      'Развитие финансовых рынков',
      'Координация железнодорожного транспорта'
    ]
  },
  {
    id: 4,
    year: '1950-1960',
    title: 'Компьютерная революция',
    description: 'Появление первых цифровых компьютеров и развитие вычислительной техники',
    icon: 'Computer',
    impact: 'Автоматизация вычислений и обработки данных',
    details: [
      'ENIAC — первый универсальный компьютер',
      'Транзисторы вместо вакуумных ламп',
      'Интегральные схемы',
      'Персональные компьютеры в 1970-80х'
    ]
  },
  {
    id: 5,
    year: '1990',
    title: 'Интернет и World Wide Web',
    description: 'Создание всемирной паутины Тимом Бернерсом-Ли',
    icon: 'Globe',
    impact: 'Глобальная сеть обмена информацией',
    details: [
      'Протокол HTTP и язык HTML',
      'Браузеры и поисковые системы',
      'Электронная коммерция',
      'Социальные сети'
    ]
  },
  {
    id: 6,
    year: '2020-н.в.',
    title: 'Искусственный интеллект',
    description: 'Развитие нейронных сетей и генеративных моделей',
    icon: 'Brain',
    impact: 'Автоматизация интеллектуального труда',
    details: [
      'Машинное обучение и глубокие нейросети',
      'Генерация текста, изображений, кода',
      'Автоматический перевод и анализ данных',
      'Персональные ИИ-ассистенты'
    ]
  }
];

const Index = () => {
  const [selectedRevolution, setSelectedRevolution] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Информационные революции
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            От древней письменности до искусственного интеллекта — эволюция способов создания, хранения и передачи информации
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-purple-500 to-primary opacity-30 hidden md:block"></div>

          <div className="space-y-12">
            {revolutions.map((revolution, index) => (
              <div
                key={revolution.id}
                className={`relative animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 hidden md:block"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50 hover:scale-110 transition-transform duration-300">
                      <Icon name={revolution.icon} size={28} className="text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <Card 
                      className="cursor-pointer hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50"
                      onClick={() => setSelectedRevolution(selectedRevolution === revolution.id ? null : revolution.id)}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="md:hidden w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <Icon name={revolution.icon} size={24} className="text-primary-foreground" />
                          </div>
                          <Badge variant="outline" className="text-sm font-semibold border-primary/50 text-primary">
                            {revolution.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl">{revolution.title}</CardTitle>
                        <CardDescription className="text-base">{revolution.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start gap-2">
                            <Icon name="Sparkles" size={20} className="text-primary mt-1 flex-shrink-0" />
                            <p className="text-sm text-foreground/90">{revolution.impact}</p>
                          </div>
                          
                          {selectedRevolution === revolution.id && (
                            <div className="mt-6 pt-6 border-t border-border/50 animate-accordion-down">
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Icon name="ListChecks" size={18} className="text-primary" />
                                Ключевые достижения
                              </h4>
                              <ul className="space-y-2">
                                {revolution.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-primary mt-1">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-20 text-center text-muted-foreground animate-fade-in">
          <p className="text-sm">
            Информационные революции продолжают менять наш мир
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
