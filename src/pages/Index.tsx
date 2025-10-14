import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Lightbulb,
  Shield,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { COLORS, HOTMART_LINK, SOCIAL_LINKS } from "@/lib/constants";

export default function LandingPage() {
  const handleCTAClick = () => {
    window.open(HOTMART_LINK, "_blank");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "white" }}>
      {/* Hero Section - Texto à esquerda, imagem à direita */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1
                  className="text-4xl md:text-6xl font-bold leading-tight"
                  style={{ color: COLORS.primary }}
                >
                  📖 Fale com Medo Mesmo
                </h1>
                <p
                  className="text-xl md:text-2xl font-medium leading-relaxed"
                  style={{ color: COLORS.accent }}
                >
                  O método em 4 etapas para quem já tremeu antes de apresentar
                  um trabalho — e decidiu falar em público mesmo assim.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: COLORS.text }}
                >
                  Mesmo que você ainda sinta medo, este guia mostra como
                  transformar nervosismo em energia e segurança diante de
                  qualquer público.
                </p>
              </div>

              <Button
                onClick={handleCTAClick}
                size="lg"
                className="text-white font-semibold px-8 py-4 text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg group"
                style={{ backgroundColor: COLORS.primary }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.accent)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.primary)
                }
              >
                Quero meu e-book agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl transform rotate-3"
                style={{ backgroundColor: COLORS.secondary }}
              ></div>
              <img
                src="/assets/profile-student.jpg"
                alt="Pessoa confiante falando em público"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section - Imagem à esquerda, texto à direita */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute inset-0 rounded-3xl transform -rotate-3"
                style={{ backgroundColor: "white" }}
              ></div>
              <div
                className="relative rounded-3xl shadow-2xl p-8 md:p-12"
                style={{ backgroundColor: "white" }}
              >
                <div className="text-center space-y-6">
                  <div className="text-6xl">😰</div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: COLORS.primary }}
                  >
                    Mãos suando, coração disparado
                  </h3>
                  <p style={{ color: COLORS.text }}>
                    A simples ideia de falar para outras pessoas faz você querer
                    desaparecer
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: COLORS.primary }}
              >
                Você já passou por isso?
              </h2>

              <div
                className="space-y-4 text-lg leading-relaxed"
                style={{ color: COLORS.text }}
              >
                <p>
                  Mãos suando, coração disparado, mente em branco. A simples
                  ideia de levantar e falar para outras pessoas faz você querer
                  desaparecer.
                </p>

                <p>
                  Talvez já tenha chorado antes de uma apresentação, inventado
                  desculpas para não falar ou saído arrasado depois de travar
                  diante de colegas ou professores.
                </p>

                <div
                  className="p-6 rounded-xl border-l-4 font-semibold"
                  style={{
                    backgroundColor: "white",
                    borderLeftColor: COLORS.accent,
                    color: COLORS.accent,
                  }}
                >
                  Esse medo não te paralisa só na hora: ele rouba oportunidades.
                  Você perde visibilidade no trabalho, se sente menos capaz na
                  faculdade, evita reuniões.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformação Section - Texto à esquerda, imagem à direita */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: COLORS.primary }}
              >
                ✨ E se fosse diferente?
              </h2>

              <div
                className="space-y-4 text-lg leading-relaxed"
                style={{ color: COLORS.text }}
              >
                <p>
                  Imagine entrar em uma sala de aula, auditório ou reunião e,
                  mesmo com o frio na barriga, conseguir se expressar com
                  clareza.
                </p>

                <p>
                  Imagine apresentar um TCC sem travar, conduzir uma reunião com
                  firmeza ou até dar uma palestra com autenticidade, sendo
                  ouvido e respeitado.
                </p>

                <div
                  className="p-6 rounded-xl font-semibold text-xl"
                  style={{
                    backgroundColor: COLORS.secondary,
                    color: COLORS.primary,
                  }}
                >
                  A vida flui quando o medo deixa de ser um inimigo. Você
                  conquista respeito, confiança e abre portas para novas
                  oportunidades.
                </div>
              </div>

              <Button
                onClick={handleCTAClick}
                variant="outline"
                size="lg"
                className="font-semibold px-6 py-3 rounded-lg border-2 hover:scale-105 transition-all duration-300"
                style={{
                  borderColor: COLORS.primary,
                  color: COLORS.primary,
                }}
              >
                Descobrir o método
              </Button>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl transform rotate-2"
                style={{ backgroundColor: COLORS.secondary }}
              ></div>
              <div
                className="relative rounded-3xl shadow-2xl p-8 text-center space-y-6"
                style={{ backgroundColor: "white" }}
              >
                <div className="text-6xl">✨</div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.primary }}
                >
                  Transformação Real
                </h3>
                <p style={{ color: COLORS.text }}>
                  Falar em público com confiança e autenticidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução Section - Imagem à esquerda, texto à direita */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute inset-0 rounded-3xl transform -rotate-2"
                style={{ backgroundColor: "white" }}
              ></div>
              <div
                className="relative rounded-3xl shadow-2xl p-8 text-center space-y-6"
                style={{ backgroundColor: "white" }}
              >
                <div className="text-6xl">🔑</div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.primary }}
                >
                  Método Prático
                </h3>
                <p style={{ color: COLORS.text }}>
                  Criado por quem já passou pelo mesmo medo
                </p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: COLORS.primary }}
              >
                A solução nasceu da prática
              </h2>

              <div
                className="space-y-4 text-lg leading-relaxed"
                style={{ color: COLORS.text }}
              >
                <p>
                  Este método não veio da teoria. Ele foi criado a partir da
                  experiência real de quem já chorou antes de falar, já tremeu
                  diante de uma banca, já quase desistiu de se expor em público.
                </p>

                <div
                  className="p-6 rounded-xl font-semibold"
                  style={{
                    backgroundColor: "white",
                    color: COLORS.accent,
                  }}
                >
                  E justamente por isso funciona. Porque não promete que o medo
                  vai sumir (isso não existe). Ele mostra como falar bem mesmo
                  nervoso, usando o medo como energia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do E-book Section - Texto à esquerda, grid à direita */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: COLORS.primary }}
              >
                📘 O que você vai encontrar no e-book
              </h2>
              <p
                className="text-xl leading-relaxed"
                style={{ color: COLORS.accent }}
              >
                Fale com Medo Mesmo é um guia prático e direto, sem enrolação.
              </p>

              <Button
                onClick={handleCTAClick}
                size="lg"
                className="text-white font-semibold px-8 py-4 text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ backgroundColor: COLORS.primary }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.accent)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.primary)
                }
              >
                Quero meu e-book agora
              </Button>
            </div>

            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Lightbulb className="w-6 h-6" />,
                  text: "O método em 4 etapas para falar bem mesmo nervoso: emoção, preparação, antecipação e execução.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  text: "Estratégias práticas para TCCs, reuniões, apresentações e palestras.",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  text: "Planos de resgate contra o branco, tremores e falhas de memória.",
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  text: "Técnicas reais usadas por pessoas comuns que venceram o pânico de falar em público.",
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  text: "Checklists e roteiros prontos para você usar imediatamente.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div
                        className="p-3 rounded-full w-fit"
                        style={{ backgroundColor: COLORS.secondary }}
                      >
                        <div style={{ color: COLORS.primary }}>{item.icon}</div>
                      </div>
                      <p
                        className="leading-relaxed"
                        style={{ color: COLORS.text }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objeções Section */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: COLORS.primary }}
            >
              ❌ Quebrando as objeções
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: '"Mas eu tenho medo demais…"',
                answer:
                  "👉 Justamente por isso este método existe. Foi criado por quem já passou por isso.",
              },
              {
                question: '"E se eu for tímido(a) por natureza?"',
                answer:
                  "👉 Timidez não é barreira, é ponto de partida. Aqui você aprende a usar sua autenticidade como força.",
              },
              {
                question: '"Preciso decorar tudo?"',
                answer:
                  "👉 Não. Você vai aprender a estruturar sua fala em blocos simples que servem como guia natural.",
              },
              {
                question: '"Não tenho tempo para ensaiar horas…"',
                answer:
                  "👉 As técnicas cabem no seu dia a dia, sem treinos intermináveis.",
              },
              {
                question: '"E se eu travar?"',
                answer:
                  "👉 O e-book ensina planos de resgate para retomar o controle em segundos.",
              },
            ]
              .slice(0, 4)
              .map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundColor: "white" }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <p
                        className="font-semibold text-lg"
                        style={{ color: COLORS.primary }}
                      >
                        {item.question}
                      </p>
                      <p
                        className="text-lg font-medium"
                        style={{ color: COLORS.accent }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Preço e CTA Final Section */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: COLORS.primary }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">🚀 Hora de agir</h2>

            <div className="space-y-6 text-lg">
              <p>
                O medo não vai desaparecer sozinho. Mas você pode decidir agora
                usá-lo como combustível para conquistar respeito, confiança e
                oportunidades.
              </p>
            </div>

            <Card
              className="border-0 shadow-2xl max-w-2xl mx-auto"
              style={{ backgroundColor: "white" }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: COLORS.primary }}
                  >
                    📘 Fale com Medo Mesmo
                  </h3>
                  <p
                    className="text-3xl font-bold"
                    style={{ color: COLORS.accent }}
                  >
                    apenas R$ 37,00
                  </p>
                  <p className="text-lg" style={{ color: COLORS.text }}>
                    Pagamento único, acesso imediato em PDF.
                  </p>

                  <div
                    className="p-4 rounded-lg border-2 border-dashed"
                    style={{
                      backgroundColor: COLORS.secondary,
                      borderColor: COLORS.accent,
                    }}
                  >
                    <Badge
                      className="mb-2 text-sm font-semibold"
                      style={{ backgroundColor: COLORS.accent, color: "white" }}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      OFERTA ESPECIAL DE LANÇAMENTO
                    </Badge>
                    <p className="font-medium" style={{ color: COLORS.text }}>
                      ⚡ Por tempo limitado, quem adquirir o e-book leva também
                      um checklist exclusivo de preparação rápida.
                    </p>
                  </div>

                  <Button
                    onClick={handleCTAClick}
                    size="lg"
                    className="text-white font-bold px-12 py-6 text-xl rounded-lg hover:scale-105 transition-all duration-300 shadow-xl w-full"
                    style={{ backgroundColor: COLORS.primary }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = COLORS.accent)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = COLORS.primary)
                    }
                  >
                    Quero meu e-book agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 text-center"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold" style={{ color: COLORS.primary }}>
            Envolvasi
          </h3>

          <div className="flex justify-center space-x-6">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 font-medium"
              style={{ color: COLORS.accent }}
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.hotmart}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 font-medium"
              style={{ color: COLORS.accent }}
            >
              Kiwify
            </a>
          </div>

          <p className="text-sm" style={{ color: COLORS.text }}>
            © 2024 Envolvasi. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
