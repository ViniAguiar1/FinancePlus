# FinancePlus 💰

Um aplicativo móvel moderno e intuitivo para controle financeiro pessoal, desenvolvido com React Native e Expo.

## 📱 Sobre o Projeto

O FinancePlus é uma solução completa para gerenciar suas finanças pessoais de forma simples e eficiente. Com uma interface moderna e funcionalidades essenciais, o app permite controlar receitas, despesas, transferências e acompanhar o histórico financeiro.

## ✨ Funcionalidades

### 🔐 **Sistema de Autenticação**
- **Login Seguro**: Autenticação com email e senha
- **Cadastro de Usuários**: Criação de contas personalizadas
- **Logout Automático**: Sempre força novo login ao reiniciar o app
- **Persistência de Sessão**: Mantém usuário logado durante o uso
- **Validação de Campos**: Verificação de dados obrigatórios

### 🏠 **Tela Principal (Home)**
- **Dashboard Financeiro**: Visualização rápida do saldo total
- **Indicadores de Crescimento**: Acompanhamento da evolução financeira mensal
- **Ações Rápidas**: Acesso direto às principais funcionalidades
- **Resumo Mensal**: Visão geral de receitas e despesas
- **Transações Recentes**: Histórico das últimas movimentações

### ➕ **Gestão de Receitas**
- Formulário intuitivo para adicionar receitas
- Categorização automática (Salário, Freelance, Investimentos, Vendas)
- Criação de categorias personalizadas
- Validação de campos obrigatórios

### 💸 **Controle de Despesas**
- Registro detalhado de gastos
- Sistema de categorização inteligente
- Acompanhamento de padrões de consumo

### ⚙️ **Configurações**
- **Perfil do Usuário**: Personalização das informações
- **Segurança**: Configurações de autenticação e biometria
- **Notificações**: Controle de alertas e lembretes
- **Backup e Sincronização**: Proteção e sincronização de dados
- **Exportação**: Relatórios em diferentes formatos
- **Tema**: Suporte a modo claro/escuro
- **Logout**: Sair da conta com confirmação

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento e build
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Expo Router** - Sistema de navegação baseado em arquivos
- **React Native Vector Icons** - Biblioteca de ícones
- **StyleSheet** - Estilização nativa para performance
- **AsyncStorage** - Persistência local de dados
- **Context API** - Gerenciamento de estado global

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app no dispositivo móvel (para testes)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd FinancePlus
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npx expo start
   ```

4. **Execute no dispositivo**
   - Escaneie o QR code com o Expo Go (Android/iOS)
   - Pressione `i` para abrir no simulador iOS
   - Pressione `a` para abrir no emulador Android

### 🔑 Credenciais de Teste
- **Email**: `teste@email.com`
- **Senha**: `123456`

## 📱 Estrutura do Projeto

```
FinancePlus/
├── app/                          # Diretório principal da aplicação
│   ├── _layout.tsx              # Layout raiz com Stack Navigator
│   ├── +not-found.tsx           # Tela de erro 404
│   ├── contexts/                 # Contextos da aplicação
│   │   └── AuthContext.tsx      # Contexto de autenticação
│   ├── components/               # Componentes reutilizáveis
│   │   └── LoadingScreen.tsx    # Tela de carregamento
│   ├── (auth)/                  # Sistema de autenticação
│   │   ├── _layout.tsx          # Layout das telas de auth
│   │   ├── index.tsx            # Redirecionamento para login
│   │   ├── login.tsx            # Tela de login
│   │   └── signup.tsx           # Tela de cadastro
│   └── (tabs)/                  # Navegação por abas
│       ├── _layout.tsx          # Layout das abas principais
│       ├── (home)/              # Grupo de telas da home
│       │   ├── _layout.tsx      # Layout das telas da home
│       │   ├── index.tsx        # Tela principal (Dashboard)
│       │   ├── receita.tsx      # Tela de adicionar receita
│       │   └── details.tsx      # Tela de detalhes
│       └── settings.tsx         # Tela de configurações
├── assets/                       # Recursos estáticos
│   ├── fonts/                   # Fontes personalizadas
│   └── images/                  # Imagens e ícones
├── app.json                     # Configuração do Expo
├── package.json                 # Dependências do projeto
└── tsconfig.json               # Configuração do TypeScript
```

## 🔐 Sistema de Autenticação

### Fluxo de Login
1. **App Inicia** → Redireciona para tela de login
2. **Usuário Digita Credenciais** → Validação de campos
3. **Autenticação** → Verificação de email/senha
4. **Sucesso** → Navegação para dashboard principal
5. **Erro** → Mensagem de erro com opção de tentar novamente

### Funcionalidades de Segurança
- **Validação de Senha**: Mínimo de 6 caracteres
- **Confirmação de Senha**: Verificação de correspondência
- **Logout Automático**: Sempre força novo login ao reiniciar
- **Persistência Local**: Mantém sessão ativa durante o uso
- **Logout Manual**: Botão de sair nas configurações

### Telas de Autenticação
- **Login**: Formulário de email e senha com validação
- **Cadastro**: Formulário completo com nome, email e senha
- **Validações**: Verificação de campos obrigatórios e formato
- **Navegação**: Transição suave entre telas de auth

## 🎨 Design System

### Paleta de Cores
- **Primária**: `#007AFF` (Azul iOS)
- **Sucesso**: `#10b981` (Verde)
- **Erro**: `#FF3B30` (Vermelho iOS)
- **Aviso**: `#f59e0b` (Âmbar)
- **Neutro**: `#8E8E93` (Cinza iOS)
- **Background**: `#F2F2F7` (Cinza claro iOS)

### Tipografia
- **Títulos**: 32px, 700 weight
- **Subtítulos**: 16px, 400 weight
- **Corpo**: 16px, 600 weight
- **Legendas**: 14px, 500 weight
- **Micro**: 12px, 400 weight

### Componentes
- Cards com sombras e bordas arredondadas (12px)
- Botões com estados de interação e loading
- Inputs com ícones e validação visual
- Ícones semânticos para melhor UX
- Tela de loading com spinner centralizado

## 🔧 Funcionalidades Técnicas

### Navegação
- **Stack Navigator**: Para navegação entre telas relacionadas
- **Tab Navigator**: Para navegação principal entre seções
- **File-based Routing**: Sistema de roteamento baseado em arquivos
- **Redirecionamento Inteligente**: Sempre vai para login primeiro

### Estado
- **useState**: Gerenciamento de estado local
- **Context API**: Estado global de autenticação
- **AsyncStorage**: Persistência local de dados do usuário
- **useEffect**: Controle de ciclo de vida dos componentes

### Performance
- **StyleSheet**: Estilos otimizados para React Native
- **ScrollView**: Rolagem suave com indicadores ocultos
- **TouchableOpacity**: Feedback tátil responsivo
- **KeyboardAvoidingView**: Adaptação automática ao teclado

## 📋 Roadmap

### Versão 1.1 ✅
- [x] Sistema de autenticação completo
- [x] Tela de login e cadastro
- [x] Persistência local de sessão
- [x] Validação de formulários
- [x] Navegação protegida

### Versão 1.2
- [ ] Implementar sistema de categorias personalizadas
- [ ] Adicionar busca e filtros de transações
- [ ] Sistema de metas financeiras
- [ ] Relatórios e gráficos básicos

### Versão 1.3
- [ ] Backup na nuvem
- [ ] Múltiplas contas bancárias
- [ ] Sincronização com APIs bancárias
- [ ] Notificações push

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

**Vinicius Aguiar** - Desenvolvedor Full Stack

## 📞 Suporte

- **Email**: [seu-email@exemplo.com]
- **GitHub**: [@seu-usuario]
- **LinkedIn**: [seu-linkedin]

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
