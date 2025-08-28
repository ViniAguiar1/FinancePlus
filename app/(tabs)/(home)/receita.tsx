import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ReceitaScreen() {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [novaCategoria, setNovaCategoria] = useState("");

  const categorias = [
    { id: "salario", nome: "Salário", icon: "card" },
    { id: "freelance", nome: "Freelance", icon: "laptop" },
    { id: "investimentos", nome: "Investimentos", icon: "trending-up" },
    { id: "vendas", nome: "Vendas", icon: "storefront" },
    { id: "outros", nome: "Outros", icon: "add-circle" },
  ];

  const handleSave = () => {
    if (!valor || !descricao || !categoria) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    // Aqui você salvaria a receita
    Alert.alert("Sucesso", "Receita adicionada com sucesso!", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  const handleCategoriaPress = (catId: string) => {
    if (catId === "outros") {
      setModalVisible(true);
    } else {
      setCategoria(catId);
    }
  };

  const handleSaveNovaCategoria = () => {
    if (novaCategoria.trim()) {
      setCategoria(novaCategoria.trim());
      setModalVisible(false);
      setNovaCategoria("");
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1e293b" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nova Receita</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Valor */}
        <View style={styles.section}>
          <Text style={styles.label}>Valor</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.currency}>R$</Text>
            <TextInput
              style={styles.input}
              value={valor}
              onChangeText={setValor}
              placeholder="0,00"
              keyboardType="numeric"
              placeholderTextColor="#94a3b8"
            />
          </View>
        </View>

        {/* Descrição */}
        <View style={styles.section}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Digite a descrição da receita"
            placeholderTextColor="#94a3b8"
          />
        </View>

        {/* Categoria */}
        <View style={styles.section}>
          <Text style={styles.label}>Categoria</Text>
          <View style={styles.categoriesContainer}>
            {categorias.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryButton,
                  (categoria === cat.id || (cat.id !== "outros" && categoria === cat.id)) && styles.categoryButtonSelected,
                ]}
                onPress={() => handleCategoriaPress(cat.id)}
              >
                <Ionicons
                  name={cat.icon as any}
                  size={20}
                  color={(categoria === cat.id || (cat.id !== "outros" && categoria === cat.id)) ? "white" : "#6366f1"}
                />
                <Text
                  style={[
                    styles.categoryText,
                    (categoria === cat.id || (cat.id !== "outros" && categoria === cat.id)) && styles.categoryTextSelected,
                  ]}
                >
                  {cat.nome}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {categoria && !categorias.find(cat => cat.id === categoria) && (
            <View style={styles.customCategoryDisplay}>
              <Text style={styles.customCategoryText}>Categoria personalizada: {categoria}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Receita</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para nova categoria */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Nova Categoria</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#1e293b" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.modalContent}>
              <Text style={styles.modalLabel}>Nome da categoria</Text>
              <TextInput
                style={styles.modalInput}
                value={novaCategoria}
                onChangeText={setNovaCategoria}
                placeholder="Digite o nome da categoria"
                placeholderTextColor="#94a3b8"
                autoFocus
              />
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleSaveNovaCategoria}
              >
                <Text style={styles.confirmButtonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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

  backButton: {
    padding: 4,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
  },

  form: {
    padding: 20,
  },

  section: {
    marginBottom: 24,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  currency: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6366f1",
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#1e293b",
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
  },

  categoryButtonSelected: {
    backgroundColor: "#6366f1",
    borderColor: "#6366f1",
  },

  categoryText: {
    fontSize: 14,
    color: "#374151",
  },

  categoryTextSelected: {
    color: "white",
  },

  customCategoryDisplay: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  customCategoryText: {
    fontSize: 14,
    color: "#6366f1",
    fontWeight: "500",
  },

  buttonContainer: {
    padding: 20,
  },

  saveButton: {
    backgroundColor: "#10b981",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },

  saveButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },

  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 34,
    minHeight: 300,
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
  },

  closeButton: {
    padding: 4,
  },

  modalContent: {
    padding: 20,
  },

  modalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },

  modalInput: {
    fontSize: 16,
    color: "#1e293b",
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  modalButtons: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  cancelButton: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  cancelButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#64748b",
  },

  confirmButton: {
    flex: 1,
    backgroundColor: "#6366f1",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  confirmButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
