import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const COLORS = {
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#1E293B',
    secondaryText: '#64748B',
    border: '#E2E8F0',
    rock: '#EF4444',
    paper: '#0D9488',
    scissors: '#D97706',
};

export default function RulesScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Game Rules 📜</Text>