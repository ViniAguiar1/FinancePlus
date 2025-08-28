import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Linking,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../contexts/AuthContext';

interface SettingItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  rightElement?: React.ReactNode;
  showChevron?: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  rightElement,
  showChevron = true,
}) => (
  <TouchableOpacity
    style={styles.settingItem}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.settingItemLeft}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={20} color="#007AFF" />
      </View>
      <View style={styles.settingItemText}>
        <Text style={styles.settingItemTitle}>{title}</Text>
        {subtitle && (
          <Text style={styles.settingItemSubtitle}>{subtitle}</Text>
        )}
      </View>
    </View>
    <View style={styles.settingItemRight}>
      {rightElement}
      {showChevron && (
        <Ionicons name="chevron-forward" size={16} color="#C7C7CC" />
      )}
    </View>
  </TouchableOpacity>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
);

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const { signOut } = useAuth();

  const handleProfilePress = () => {
    Alert.alert('Perfil', 'Editar perfil do usuário');
  };

  const handleSecurityPress = () => {
    Alert.alert('Segurança', 'Configurações de segurança');
  };

  const handleBackupPress = () => {
    Alert.alert('Backup', 'Configurar backup dos dados');
  };

  const handleExportPress = () => {
    Alert.alert('Exportar', 'Exportar dados financeiros');
  };

  const handleHelpPress = () => {
    Alert.alert('Ajuda', 'Central de ajuda e suporte');
  };

  const handleAboutPress = () => {
    Alert.alert('Sobre', 'FinancePlus v1.0.0\nDesenvolvido com ❤️');
  };

  const handlePrivacyPress = () => {
    Linking.openURL('https://example.com/privacy');
  };

  const handleTermsPress = () => {
    Linking.openURL('https://example.com/terms');
  };

  const handleLogout = async () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair da sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Sair', 
          style: 'destructive', 
          onPress: async () => {
            await signOut();
            router.replace('/(auth)/login' as any);
          }
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Configurações</Text>
          <Text style={styles.headerSubtitle}>Gerencie suas preferências</Text>
        </View>

        {/* Profile Section */}
        <SectionHeader title="Perfil" />
        <View style={styles.section}>
          <SettingItem
            icon="person-circle-outline"
            title="Editar Perfil"
            subtitle="Nome, email e foto"
            onPress={handleProfilePress}
          />
        </View>

        {/* Preferences Section */}
        <SectionHeader title="Preferências" />
        <View style={styles.section}>
          <SettingItem
            icon="notifications-outline"
            title="Notificações"
            subtitle="Alertas e lembretes"
            rightElement={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#E5E5EA', true: '#007AFF' }}
                thumbColor="#FFFFFF"
              />
            }
            showChevron={false}
          />
          <SettingItem
            icon="moon-outline"
            title="Modo Escuro"
            subtitle="Tema escuro da aplicação"
            rightElement={
              <Switch
                value={darkModeEnabled}
                onValueChange={setDarkModeEnabled}
                trackColor={{ false: '#E5E5EA', true: '#007AFF' }}
                thumbColor="#FFFFFF"
              />
            }
            showChevron={false}
          />
          <SettingItem
            icon="finger-print-outline"
            title="Biometria"
            subtitle="Login com impressão digital"
            rightElement={
              <Switch
                value={biometricEnabled}
                onValueChange={setBiometricEnabled}
                trackColor={{ false: '#E5E5EA', true: '#007AFF' }}
                thumbColor="#FFFFFF"
              />
            }
            showChevron={false}
          />
        </View>

        {/* Data Section */}
        <SectionHeader title="Dados" />
        <View style={styles.section}>
          <SettingItem
            icon="shield-checkmark-outline"
            title="Segurança"
            subtitle="Senha e autenticação"
            onPress={handleSecurityPress}
          />
          <SettingItem
            icon="cloud-upload-outline"
            title="Backup"
            subtitle="Sincronizar com a nuvem"
            onPress={handleBackupPress}
          />
          <SettingItem
            icon="download-outline"
            title="Exportar Dados"
            subtitle="CSV, PDF ou Excel"
            onPress={handleExportPress}
          />
        </View>

        {/* Support Section */}
        <SectionHeader title="Suporte" />
        <View style={styles.section}>
          <SettingItem
            icon="help-circle-outline"
            title="Ajuda"
            subtitle="Central de suporte"
            onPress={handleHelpPress}
          />
          <SettingItem
            icon="document-text-outline"
            title="Política de Privacidade"
            subtitle="Como usamos seus dados"
            onPress={handlePrivacyPress}
          />
          <SettingItem
            icon="document-outline"
            title="Termos de Uso"
            subtitle="Condições do serviço"
            onPress={handleTermsPress}
          />
          <SettingItem
            icon="information-circle-outline"
            title="Sobre"
            subtitle="Versão e informações"
            onPress={handleAboutPress}
          />
        </View>

        {/* Logout Section */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
            activeOpacity={0.7}
          >
            <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
            <Text style={styles.logoutButtonText}>Sair da Conta</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>FinancePlus v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#8E8E93',
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    paddingTop: 24,
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8E8E93',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingItemText: {
    flex: 1,
  },
  settingItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 2,
  },
  settingItemSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
  },
  settingItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF3B30',
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  footerText: {
    fontSize: 14,
    color: '#8E8E93',
  },
});
