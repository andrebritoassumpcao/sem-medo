import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Heart,
  BookOpen,
  Users,
  Lightbulb,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import { COLORS, HOTMART_LINK, SOCIAL_LINKS } from "@/lib/constants";

export default function LandingPage() {
  const handleCTAClick = () => {
    window.open(HOTMART_LINK, "_blank");
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ color: COLORS.primary }}
            >
              📖 Fale com Medo Mesmo
            </h1>
            <p
              className="text-xl md:text-2xl font-medium"
              style={{ color: COLORS.secondary }}
            >
              O método em 4 etapas para quem já tremeu antes de apresentar um
              trabalho — e decidiu falar em público mesmo assim.
            </p>
          </div>

          <div
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
            style={{ backgroundColor: `${COLORS.subtle}40` }}
          >
            <p
              className="text-lg md:text-xl font-medium"
              style={{ color: COLORS.text }}
            >
              👉 Mesmo que você ainda sinta medo, este guia mostra como
              transformar nervosismo em energia e segurança diante de qualquer
              público.
            </p>
          </div>

          <Button
            onClick={handleCTAClick}
            size="lg"
            className="text-white font-semibold px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            style={{
              backgroundColor: COLORS.accent,
              ":hover": { backgroundColor: COLORS.accentHover },
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.accentHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.accent)
            }
          >
            Quero meu e-book agora
          </Button>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card
            className="border-0 shadow-xl"
            style={{ backgroundColor: "white" }}
          >
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: COLORS.primary }}
                >
                  😰 Você já passou por isso?
                </h2>
              </div>

              <div
                className="space-y-6 text-lg leading-relaxed"
                style={{ color: COLORS.text }}
              >
                <p>
                  Mãos suando, coração disparado, mente em branco. A simples
                  ideia de levantar e falar para outras pessoas faz você querer
                  desaparecer. Talvez já tenha chorado antes de uma
                  apresentação, inventado desculpas para não falar ou saído
                  arrasado depois de travar diante de colegas ou professores.
                </p>

                <div
                  className="p-6 rounded-xl border-l-4"
                  style={{
                    backgroundColor: `${COLORS.subtle}30`,
                    borderLeftColor: COLORS.accent,
                  }}
                >
                  <p className="font-semibold">
                    Esse medo não te paralisa só na hora: ele rouba
                    oportunidades. Você perde visibilidade no trabalho, se sente
                    menos capaz na faculdade, evita reuniões e até deixa de
                    sonhar com cargos e chances maiores por causa desse
                    bloqueio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transformação Section */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: `${COLORS.subtle}20` }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: COLORS.primary }}
            >
              ✨ E se fosse diferente?
            </h2>
          </div>

          <div
            className="space-y-6 text-lg leading-relaxed text-center"
            style={{ color: COLORS.text }}
          >
            <p>
              Imagine entrar em uma sala de aula, auditório ou reunião e, mesmo
              com o frio na barriga, conseguir se expressar com clareza. Imagine
              apresentar um TCC sem travar, conduzir uma reunião com firmeza ou
              até dar uma palestra com autenticidade, sendo ouvido e respeitado.
            </p>

            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "white" }}
            >
              <p
                className="text-xl font-semibold"
                style={{ color: COLORS.primary }}
              >
                A vida flui quando o medo deixa de ser um inimigo. Você
                conquista respeito, confiança e abre portas para novas
                oportunidades acadêmicas e profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: COLORS.primary }}
            >
              🔑 A solução nasceu da prática
            </h2>
          </div>

          <div
            className="space-y-6 text-lg leading-relaxed"
            style={{ color: COLORS.text }}
          >
            <p>
              Este método não veio da teoria. Ele foi criado a partir da
              experiência real de quem já chorou antes de falar, já tremeu
              diante de uma banca, já quase desistiu de se expor em público.
            </p>

            <div
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: `${COLORS.accent}15` }}
            >
              <p className="font-semibold text-xl">
                E justamente por isso funciona. Porque não promete que o medo
                vai sumir (isso não existe). Ele mostra como falar bem mesmo
                nervoso, usando o medo como energia, com técnicas simples que
                qualquer pessoa pode aplicar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do E-book Section */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: `${COLORS.subtle}20` }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: COLORS.primary }}
            >
              📘 O que você vai encontrar no e-book
            </h2>
            <p className="text-xl" style={{ color: COLORS.secondary }}>
              📖 Fale com Medo Mesmo é um guia prático e direto, sem enrolação.
              Dentro dele, você terá:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className="p-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `${COLORS.accent}20` }}
                    >
                      <div style={{ color: COLORS.accent }}>{item.icon}</div>
                    </div>
                    <div className="flex items-start">
                      <p style={{ color: COLORS.text }}>{item.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="text-white font-semibold px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: COLORS.accent,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.accentHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.accent)
              }
            >
              Quero meu e-book agora
            </Button>
          </div>
        </div>
      </section>

      {/* Objeções Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: COLORS.primary }}
            >
              ❌ Quebrando as objeções
            </h2>
          </div>

          <div className="space-y-6">
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
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
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

      {/* Preço Section */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: `${COLORS.subtle}20` }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: COLORS.primary }}
            >
              💵 Preço e condições
            </h2>
            <p className="text-lg" style={{ color: COLORS.text }}>
              Por menos do que você gasta em um jantar simples, você leva um
              método completo que pode transformar sua vida acadêmica e
              profissional.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.primary }}
                >
                  📘 Fale com Medo Mesmo — apenas R$ XX,XX
                </h3>
                <p className="text-lg" style={{ color: COLORS.secondary }}>
                  Pagamento único, acesso imediato em PDF.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final Section */}
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

              <p className="font-semibold">
                👉 Clique abaixo e garante já o seu e-book.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl border-2 border-dashed border-white/30"
              style={{ backgroundColor: `${COLORS.accent}20` }}
            >
              <Badge
                className="mb-4 text-sm font-semibold"
                style={{ backgroundColor: COLORS.accent, color: "white" }}
              >
                <Clock className="w-4 h-4 mr-2" />
                OFERTA ESPECIAL DE LANÇAMENTO
              </Badge>
              <p className="text-lg font-medium mb-6">
                ⚡ Por tempo limitado, quem adquirir o e-book leva também um
                checklist exclusivo de preparação rápida — para usar no dia da
                apresentação e ter segurança extra.
              </p>
            </div>

            <Button
              onClick={handleCTAClick}
              size="lg"
              className="text-lg font-bold px-12 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
              style={{
                backgroundColor: COLORS.accent,
                color: "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.accentHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.accent)
              }
            >
              Quero meu e-book agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 text-center"
        style={{ backgroundColor: COLORS.background }}
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
              className="hover:scale-110 transition-transform duration-300"
              style={{ color: COLORS.secondary }}
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.hotmart}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              style={{ color: COLORS.secondary }}
            >
              Hotmart
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
