# FinancePlus 💰

Um aplicativo móvel moderno e intuitivo para controle financeiro pessoal, desenvolvido com React Native e Expo.

## 📱 Sobre o Projeto

O FinancePlus é uma solução completa para gerenciar suas finanças pessoais de forma simples e eficiente. Com uma interface moderna e funcionalidades essenciais, o app permite controlar receitas, despesas, transferências e acompanhar o histórico financeiro.

## ✨ Funcionalidades

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

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento e build
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Expo Router** - Sistema de navegação baseado em arquivos
- **React Native Vector Icons** - Biblioteca de ícones
- **StyleSheet** - Estilização nativa para performance

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

## 📱 Estrutura do Projeto

```
FinancePlus/
├── app/                          # Diretório principal da aplicação
│   ├── _layout.tsx              # Layout raiz com Stack Navigator
│   ├── +not-found.tsx           # Tela de erro 404
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

## 🎨 Design System

### Paleta de Cores
- **Primária**: `#6366f1` (Índigo)
- **Sucesso**: `#10b981` (Verde)
- **Erro**: `#ef4444` (Vermelho)
- **Aviso**: `#f59e0b` (Âmbar)
- **Neutro**: `#1e293b` (Slate)
- **Background**: `#f8fafc` (Slate claro)

### Tipografia
- **Títulos**: 24px, 700 weight
- **Subtítulos**: 18px, 700 weight
- **Corpo**: 16px, 600 weight
- **Legendas**: 14px, 500 weight
- **Micro**: 12px, 500 weight

### Componentes
- Cards com sombras e bordas arredondadas
- Botões com estados de interação
- Inputs com validação visual
- Ícones semânticos para melhor UX

## 🔧 Funcionalidades Técnicas

### Navegação
- **Stack Navigator**: Para navegação entre telas relacionadas
- **Tab Navigator**: Para navegação principal entre seções
- **File-based Routing**: Sistema de roteamento baseado em arquivos

### Estado
- **useState**: Gerenciamento de estado local
- **Context API**: Preparado para estado global (futuro)
- **AsyncStorage**: Para persistência local (futuro)

### Performance
- **StyleSheet**: Estilos otimizados para React Native
- **ScrollView**: Rolagem suave com indicadores ocultos
- **TouchableOpacity**: Feedback tátil responsivo

## 📋 Roadmap

### Versão 1.1
- [ ] Implementar persistência local com AsyncStorage
- [ ] Adicionar sistema de categorias personalizadas
- [ ] Implementar busca e filtros de transações

### Versão 1.2
- [ ] Sistema de metas financeiras
- [ ] Relatórios e gráficos
- [ ] Backup na nuvem

### Versão 1.3
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
