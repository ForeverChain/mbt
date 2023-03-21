import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Stack, useRouter, useSearchParams } from "expo-router";
import LoadingBar from "../components/common/LoadingBar";

const Test = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.centeredView}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => router.back()}>
                            <Image source={require("../assets/images/back-button.png")} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={[styles.modalButton, { marginRight: 24 }]}
                            onPress={() => {
                                router.push("test");
                                setModalVisible(false);
                            }}>
                            <Text style={{ color: "white" }}>Тест өгөх</Text>
                        </TouchableOpacity>
                    ),
                    headerTitle: "",
                }}
            />
            <LoadingBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    modalButton: {
        backgroundColor: "#705772",
        paddingVertical: 8,
        borderRadius: 32,
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 160,
    },
});

export default Test;
