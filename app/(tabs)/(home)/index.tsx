import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, Vinicius!</Text>
          <Text style={styles.subtitle}>
            Bem-vindo ao seu controle financeiro
          </Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={40} color="#6366f1" />
        </TouchableOpacity>
      </View>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo Total</Text>
        <Text style={styles.balanceAmount}>R$ 12.450,00</Text>
        <View style={styles.balanceChange}>
          <Ionicons name="trending-up" size={16} color="#10b981" />
          <Text style={styles.balanceChangeText}>+12,5% este mês</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.quickActions}>
          <Link href="/receita" asChild>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: "#6366f1" }]}>
                <Ionicons name="add" size={24} color="white" />
              </View>
              <Text style={styles.actionText}>Receita</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/despesas/despesas" asChild>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: "#ef4444" }]}>
                <Ionicons name="remove" size={24} color="white" />
              </View>
              <Text style={styles.actionText}>Despesa</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity style={[styles.actionButton, styles.disabledButton]} disabled>
            <View style={[styles.actionIcon, { backgroundColor: "#9ca3af" }]}>
              <Ionicons name="swap-horizontal" size={24} color="white" />
            </View>
            <Text style={[styles.actionText, styles.disabledText]}>Transferir</Text>
            <Text style={styles.developmentLabel}>Em breve</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, styles.disabledButton]} disabled>
            <View style={[styles.actionIcon, { backgroundColor: "#9ca3af" }]}>
              <Ionicons name="analytics" size={24} color="white" />
            </View>
            <Text style={[styles.actionText, styles.disabledText]}>Relatórios</Text>
            <Text style={styles.developmentLabel}>Em breve</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Monthly Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo do Mês</Text>
        <View style={styles.summaryCards}>
          <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Ionicons name="arrow-up-circle" size={24} color="#10b981" />
              <Text style={styles.summaryLabel}>Receitas</Text>
            </View>
            <Text style={styles.summaryAmount}>R$ 8.200,00</Text>
          </View>

          <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Ionicons name="arrow-down-circle" size={24} color="#ef4444" />
              <Text style={styles.summaryLabel}>Despesas</Text>
            </View>
            <Text style={styles.summaryAmount}>R$ 5.750,00</Text>
          </View>
        </View>
      </View>

      {/* Recent Transactions */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Transações Recentes</Text>
          <Link href="/details" asChild>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.transactionList}>
          <View style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Ionicons name="restaurant" size={20} color="#6366f1" />
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionTitle}>Restaurante</Text>
              <Text style={styles.transactionDate}>Hoje, 19:30</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: "#ef4444" }]}>
              -R$ 45,00
            </Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Ionicons name="card" size={20} color="#10b981" />
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionTitle}>Salário</Text>
              <Text style={styles.transactionDate}>Ontem, 08:00</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: "#10b981" }]}>
              +R$ 3.500,00
            </Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Ionicons name="car" size={20} color="#f59e0b" />
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionTitle}>Combustível</Text>
              <Text style={styles.transactionDate}>Ontem, 16:45</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: "#ef4444" }]}>
              -R$ 120,00
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom Spacing */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "white",
  },

  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    color: "#64748b",
  },

  profileButton: {
    padding: 4,
  },

  balanceCard: {
    backgroundColor: "white",
    margin: 20,
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  balanceLabel: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 8,
  },

  balanceAmount: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: 12,
  },

  balanceChange: {
    flexDirection: "row",
    alignItems: "center",
  },

  balanceChangeText: {
    fontSize: 14,
    color: "#10b981",
    marginLeft: 6,
    fontWeight: "600",
  },

  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 16,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  seeAllText: {
    fontSize: 14,
    color: "#6366f1",
    fontWeight: "600",
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionButton: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
  },

  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  actionText: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "500",
    textAlign: "center",
  },

  summaryCards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  summaryCard: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  summaryLabel: {
    fontSize: 14,
    color: "#64748b",
    marginLeft: 8,
    fontWeight: "500",
  },

  summaryAmount: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e293b",
  },

  transactionList: {
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },

  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  transactionInfo: {
    flex: 1,
  },

  transactionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 2,
  },

  transactionDate: {
    fontSize: 12,
    color: "#64748b",
  },

  transactionAmount: {
    fontSize: 16,
    fontWeight: "700",
  },

  bottomSpacing: {
    height: 20,
  },

  disabledButton: {
    opacity: 0.5,
  },

  disabledText: {
    color: "#9ca3af",
  },

  developmentLabel: {
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 4,
  },
});
