function validacao() {
    var PalavraCorretaCS = false;
    var PalavraCorretaRegistradores = false;
    var PalavraCorretai7 = false;
    var PalavraCorretaDualCore = false;
    var PalavraCorretaEprom = false;
    var PalavraCorretaDMA = false;
    var PalavraCorretaThreads = false;
    var PalavraCorretaCache = false;
    var PalavraCorretaAdressBus = false;
    var PalavraCorretaROM = false;
    var PalavraCorretaRAM = false;
    var PalavraCorretaCPU = false;
    var PalavraCorretaULA = false;
    var PalavraCorretaFlash = false;
    var PalavraCorretaMemoria = false;
    var PalavraCorretai5 = false;
    var PalavraCorretaDataBus = false;
    var PalavraCorretaQuadCore = false;

    if ((input_letra_C1_1.value == "c" || input_letra_C1_1.value == "C")
        && (input_letra_S13_2_S2_1.value == "s" || input_letra_S13_2_S2_1.value == "S")) {
        PalavraCorretaCS = true;
    }

    if (PalavraCorretaCS == true) {
        q01.style = "text-decoration: line-through;"
        input_letra_C1_1.style.backgroundColor = "lightgreen";
        input_letra_S13_2_S2_1.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_R1_2.value == "r" || input_letra_R1_2.value == "R")
        && (input_letra_E2_2.value == "e" || input_letra_E2_2.value == "E")
        && (input_letra_G3_2.value == "g" || input_letra_G3_2.value == "G")
        && (input_letra_I4_2_I1_3.value == "i" || input_letra_I4_2_I1_3.value == "I")
        && (input_letra_S5_2.value == "s" || input_letra_S5_2.value == "S")
        && (input_letra_T6_2.value == "t" || input_letra_T6_2.value == "T")
        && (input_letra_R7_2.value == "r" || input_letra_R7_2.value == "R")
        && (input_letra_A8_2.value == "a" || input_letra_A8_2.value == "A")
        && (input_letra_D9_2_D1_4.value == "d" || input_letra_D9_2_D1_4.value == "D")
        && (input_letra_O10_2.value == "o" || input_letra_O10_2.value == "O")
        && (input_letra_R11_2.value == "r" || input_letra_R11_2.value == "R")
        && (input_letra_E12_2.value == "e" || input_letra_E12_2.value == "E")
        && (input_letra_S13_2_S2_1.value == "s" || input_letra_S13_2_S2_1.value == "S")) {
        PalavraCorretaRegistradores = true;
    }

    if (PalavraCorretaRegistradores == true) {
        q02.style = "text-decoration: line-through;"
        input_letra_R1_2.style.backgroundColor = "lightgreen";
        input_letra_E2_2.style.backgroundColor = "lightgreen";
        input_letra_G3_2.style.backgroundColor = "lightgreen";
        input_letra_I4_2_I1_3.style.backgroundColor = "lightgreen";
        input_letra_S5_2.style.backgroundColor = "lightgreen";
        input_letra_T6_2.style.backgroundColor = "lightgreen";
        input_letra_R7_2.style.backgroundColor = "lightgreen";
        input_letra_A8_2.style.backgroundColor = "lightgreen";
        input_letra_D9_2_D1_4.style.backgroundColor = "lightgreen";
        input_letra_O10_2.style.backgroundColor = "lightgreen";
        input_letra_R11_2.style.backgroundColor = "lightgreen";
        input_letra_E12_2.style.backgroundColor = "lightgreen";
        input_letra_S13_2_S2_1.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_I4_2_I1_3.value == "i" || input_letra_I4_2_I1_3.value == "I")
        && input_letra_72_3.value == "7") {
        PalavraCorretai7 = true;
    }

    if (PalavraCorretai7 == true) {
        q03.style = "text-decoration: line-through;"
        input_letra_I4_2_I1_3.style.backgroundColor = "lightgreen";
        input_letra_72_3.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_D9_2_D1_4.value == "d" || input_letra_D9_2_D1_4.value == "D")
        && (input_letra_U2_4.value == "u" || input_letra_U2_4.value == "U")
        && (input_letra_A3_4_A3_6.value == "a" || input_letra_A3_4_A3_6.value == "A")
        && (input_letra_L4_4.value == "l" || input_letra_L4_4.value == "L")
        && (input_letra_C5_4.value == "c" || input_letra_C5_4.value == "C")
        && (input_letra_O6_4.value == "o" || input_letra_O6_4.value == "O")
        && (input_letra_R7_4.value == "r" || input_letra_R7_4.value == "R")
        && (input_letra_E9_4.value == "e" || input_letra_E9_4.value == "E")) {
        PalavraCorretaDualCore = true;
    }

    if (PalavraCorretaDualCore == true) {
        q04.style = "text-decoration: line-through;"
        input_letra_D9_2_D1_4.style.backgroundColor = "lightgreen";
        input_letra_U2_4.style.backgroundColor = "lightgreen";
        input_letra_A3_4_A3_6.style.backgroundColor = "lightgreen";
        input_letra_L4_4.style.backgroundColor = "lightgreen";
        input_letra_C5_4.style.backgroundColor = "lightgreen";
        input_letra_O6_4.style.backgroundColor = "lightgreen";
        input_letra_R7_4.style.backgroundColor = "lightgreen";
        input_letra_E9_4.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_E1_5.value == "e" || input_letra_E1_5.value == "E")
        && (input_letra_P2_5.value == "p" || input_letra_P2_5.value == "P")
        && (input_letra_R3_5.value == "r" || input_letra_R3_5.value == "R")
        && (input_letra_O4_5.value == "o" || input_letra_O4_5.value == "O")
        && (input_letra_M3_10.value == "m" || input_letra_M3_10.value == "M")) {
        PalavraCorretaEprom = true;
    }

    if (PalavraCorretaEprom == true) {
        q05.style = "text-decoration: line-through;"
        input_letra_E1_5.style.backgroundColor = "lightgreen";
        input_letra_P2_5.style.backgroundColor = "lightgreen";
        input_letra_R3_5.style.backgroundColor = "lightgreen";
        input_letra_O4_5.style.backgroundColor = "lightgreen";
        input_letra_M3_10.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_D1_6.value == "d" || input_letra_D1_6.value == "D")
        && (input_letra_M2_6.value == "m" || input_letra_M2_6.value == "M")
        && (input_letra_A3_4_A3_6.value == "a" || input_letra_A3_4_A3_6.value == "A")) {
        PalavraCorretaDMA = true;
    }

    if (PalavraCorretaDMA == true) {
        q06.style = "text-decoration: line-through;"
        input_letra_D1_6.style.backgroundColor = "lightgreen";
        input_letra_M2_6.style.backgroundColor = "lightgreen";
        input_letra_A3_4_A3_6.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_T1_7.value == "t" || input_letra_T1_7.value == "T")
        && (input_letra_H2_7.value == "h" || input_letra_H2_7.value == "H")
        && (input_letra_R3_7_R1_10.value == "r" || input_letra_R3_7_R1_10.value == "R")
        && (input_letra_E4_7.value == "e" || input_letra_E4_7.value == "E")
        && (input_letra_A5_7_A3_14.value == "a" || input_letra_A5_7_A3_14 == "A") && (input_letra_D7_7.value == "D" || input_letra_D7_7.value == "d") && (input_letra_S13_15.value == "s" || input_letra_S13_15.value == "S")) {
        PalavraCorretaThreads = true;
    }

    if (PalavraCorretaThreads == true) {
        q07.style = "text-decoration: line-through;"
        input_letra_T1_7.style.backgroundColor = "lightgreen";
        input_letra_H2_7.style.backgroundColor = "lightgreen";
        input_letra_R3_7_R1_10.style.backgroundColor = "lightgreen";
        input_letra_E4_7.style.backgroundColor = "lightgreen";
        input_letra_A5_7_A3_14.style.backgroundColor = "lightgreen";
        input_letra_D7_7.style.backgroundColor = "lightgreen";
        input_letra_S13_15.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_C1_8.value == "c" || input_letra_C1_8.value == "C")
        && (input_letra_A2_11.value == "a" || input_letra_A2_11.value == "A")
        && (input_letra_C3_8.value == "c" || input_letra_C3_8.value == "C")
        && (input_letra_H4_8.value == "h" || input_letra_H4_8.value == "H")
        && (input_letra_E5_8_E2_15.value == "e" || input_letra_E5_8_E2_15.value == "E")) {
        PalavraCorretaCache = true;
    }

    if (PalavraCorretaCache == true) {
        q08.style = "text-decoration: line-through;"
        input_letra_C1_8.style.backgroundColor = "lightgreen";
        input_letra_A2_11.style.backgroundColor = "lightgreen";
        input_letra_C3_8.style.backgroundColor = "lightgreen";
        input_letra_H4_8.style.backgroundColor = "lightgreen";
        input_letra_E5_8_E2_15.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_A1_9.value == "a" || input_letra_A1_9.value == "A")
        && (input_letra_D2_9.value == "d" || input_letra_D2_9 == "D")
        && (input_letra_R3_5_9.value == "r" || input_letra_R3_5_9 == "R")
        && (input_letra_E4_9.value == "e" || input_letra_E4_9.value == "E")
        && (input_letra_S5_9.value == "s" || input_letra_S5_9.value == "S")
        && (input_letra_S6_9.value == "s" || input_letra_S6_9.value == "s")
        && (input_letra_B7_9.value == "b" || input_letra_B7_9 == "B")
        && (input_letra_U8_9.value == "u" || input_letra_U8_9.value == "U")
        && (input_letra_S9_9.value == "s" || input_letra_S9_9.value == "S")) {
        PalavraCorretaAdressBus = true;
    }

    if (PalavraCorretaAdressBus == true) {
        q09.style = "text-decoration: line-through;"
        input_letra_A1_9.style.backgroundColor = "lightgreen";
        input_letra_D2_9.style.backgroundColor = "lightgreen";
        input_letra_R3_5_9.style.backgroundColor = "lightgreen";
        input_letra_E4_9.style.backgroundColor = "lightgreen";
        input_letra_S5_9.style.backgroundColor = "lightgreen";
        input_letra_S6_9.style.backgroundColor = "lightgreen";
        input_letra_B7_9.style.backgroundColor = "lightgreen";
        input_letra_U8_9.style.backgroundColor = "lightgreen";
        input_letra_S9_9.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_R3_7_R1_10.value == "r" || input_letra_R3_7_R1_10.value == "R")
        && (input_letra_O2_10.value == "o" || input_letra_O2_10.value == "O")
        && (input_letra_M3_10.value == "m" || input_letra_M3_10.value == "M")) {
        PalavraCorretaROM = true;
    }

    if (PalavraCorretaROM == true) {
        q10.style = "text-decoration: line-through;"
        input_letra_R3_7_R1_10.style.backgroundColor = "lightgreen";
        input_letra_O2_10.style.backgroundColor = "lightgreen";
        input_letra_M3_10.style.backgroundColor = "lightgreen";

    }

    if ((input_letra_R1_11.value == "r" || input_letra_R1_11.value == "R")
        && (input_letra_A2_11.value == "a" || input_letra_A2_11.value == "A")
        && (input_letra_M3_11.value == "m" || input_letra_M3_11.value == "M")) {
        PalavraCorretaRAM = true;
    }

    if (PalavraCorretaRAM == true) {
        q11.style = "text-decoration: line-through;"
        input_letra_R1_11.style.backgroundColor = "lightgreen";
        input_letra_A2_11.style.backgroundColor = "lightgreen";
        input_letra_M3_11.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_C1_12.value == "c" || input_letra_C1_12.value == "C")
        && (input_letra_P2_12.value == "p" || input_letra_P2_12.value == "P")
        && (input_letra_U3_12_U1_13.value == "u" || input_letra_U3_12_U1_13.value == "U")) {
        PalavraCorretaCPU = true;
    }

    if (PalavraCorretaCPU == true) {
        q12.style = "text-decoration: line-through;"
        input_letra_C1_12.style.backgroundColor = "lightgreen";
        input_letra_P2_12.style.backgroundColor = "lightgreen";
        input_letra_U3_12_U1_13.style.backgroundColor = "lightgreen";

    }

    if ((input_letra_U3_12_U1_13.value == "u" || input_letra_U3_12_U1_13.value == "U")
        && (input_letra_L2_13.value == "l" || input_letra_L2_13.value == "L")
        && (input_letra_A7_15.value == "a" || input_letra_A7_15.value == "A")) {
        PalavraCorretaULA = true;
    }

    if (PalavraCorretaULA == true) {
        q13.style = "text-decoration: line-through;"
        input_letra_U3_12_U1_13.style.backgroundColor = "lightgreen";
        input_letra_L2_13.style.backgroundColor = "lightgreen";
        input_letra_A7_15.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_F1_14.value == "f" || input_letra_F1_14.value == "F")
        && (input_letra_L2_14.value == "l" || input_letra_L2_14.value == "L")
        && (input_letra_A5_7_A3_14.value == "a" || input_letra_A5_7_A3_14.value == "A")
        && (input_letra_S4_14.value == "s" || input_letra_S4_14.value == "S")
        && (input_letra_H5_14.value == "h" || input_letra_H5_14.value == "H")) {
        PalavraCorretaFlash = true;
    }

    if (PalavraCorretaFlash == true) {
        q14.style = "text-decoration: line-through;"
        input_letra_F1_14.style.backgroundColor = "lightgreen";
        input_letra_L2_14.style.backgroundColor = "lightgreen";
        input_letra_A5_7_A3_14.style.backgroundColor = "lightgreen";
        input_letra_S4_14.style.backgroundColor = "lightgreen";
        input_letra_H5_14.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_M1_15.value == "m" || input_letra_M1_15.value == "M")
        && (input_letra_E5_8_E2_15.value == "e" || input_letra_E5_8_E2_15.value == "E")
        && (input_letra_M3_15.value == "m" || input_letra_M3_15.value == "M")
        && (input_letra_O4_15.value == "o" || input_letra_O4_15.value == "O" || input_letra_O4_15.value == "ó" || input_letra_O4_15.value == "Ó") 
        && (input_letra_R5_15.value == "r" || input_letra_R5_15.value == "R")
        && (input_letra_I6_15_I1_16.value == "i" || input_letra_I6_15_I1_16.value == "I")
        && (input_letra_A7_15.value == "a" || input_letra_A7_15.value == "A")
        && (input_letra_D8_15_D1_17.value == "d" || input_letra_D8_15_D1_17.value == "D")
        && (input_letra_E9_4.value == "e" || input_letra_E9_4.value == "E")
        && (input_letra_M10_15.value == "m" || input_letra_M10_15.value == "M")
        && (input_letra_A11_15.value == "a" || input_letra_A11_15.value == "A")
        && (input_letra_S12_15.value == "s" || input_letra_S12_15.value == "S")
        && (input_letra_S13_15.value == "s" || input_letra_S13_15.value == "S")
        && (input_letra_A14_15.value == "a" || input_letra_A14_15.value == "A")) {
        PalavraCorretaMemoria = true;
    }

    if (PalavraCorretaMemoria == true) {
        q15.style = "text-decoration: line-through;"
        input_letra_M1_15.style.backgroundColor = "lightgreen";
        input_letra_E5_8_E2_15.style.backgroundColor = "lightgreen";
        input_letra_M3_15.style.backgroundColor = "lightgreen";
        input_letra_O4_15.style.backgroundColor = "lightgreen";
        input_letra_R5_15.style.backgroundColor = "lightgreen";
        input_letra_I6_15_I1_16.style.backgroundColor = "lightgreen";
        input_letra_A7_15.style.backgroundColor = "lightgreen";
        input_letra_D8_15_D1_17.style.backgroundColor = "lightgreen";
        input_letra_E9_4.style.backgroundColor = "lightgreen";
        input_letra_M10_15.style.backgroundColor = "lightgreen";
        input_letra_A11_15.style.backgroundColor = "lightgreen";
        input_letra_S12_15.style.backgroundColor = "lightgreen";
        input_letra_S13_15.style.backgroundColor = "lightgreen";
        input_letra_A14_15.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_I6_15_I1_16.value == "i" || input_letra_I6_15_I1_16.value == "I")
        && (input_letra_52_16.value == "5")) {
        PalavraCorretai5 = true;
    }

    if (PalavraCorretai5 == true) {
        q16.style = "text-decoration: line-through;"
        input_letra_I6_15_I1_16.style.backgroundColor = "lightgreen";
        input_letra_52_16.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_D8_15_D1_17.value == "d" || input_letra_D8_15_D1_17.value == "D")
        && (input_letra_A2_17.value == "a" || input_letra_A2_17.value == "A")
        && (input_letra_T3_17.value == "t" || input_letra_T3_17.value == "T")
        && (input_letra_A4_17.value == "a" || input_letra_A4_17.value == "A")
        && (input_letra_B5_17.value == "b" || input_letra_B5_17.value == "B")
        && (input_letra_U6_17_U2_18.value == "u" || input_letra_U6_17_U2_18.value == "U")
        && (input_letra_S7_17.value == "s" || input_letra_S7_17.value == "S")) {
        PalavraCorretaDataBus = true;
    }

    if (PalavraCorretaDataBus == true) {
        q17.style = "text-decoration: line-through;"
        input_letra_D8_15_D1_17.style.backgroundColor = "lightgreen";
        input_letra_A2_17.style.backgroundColor = "lightgreen";
        input_letra_T3_17.style.backgroundColor = "lightgreen";
        input_letra_A4_17.style.backgroundColor = "lightgreen";
        input_letra_B5_17.style.backgroundColor = "lightgreen";
        input_letra_U6_17_U2_18.style.backgroundColor = "lightgreen";
        input_letra_S7_17.style.backgroundColor = "lightgreen";
    }

    if ((input_letra_Q1_18.value == "q" || input_letra_Q1_18.value == "Q")
        && (input_letra_U6_17_U2_18.value == "u" || input_letra_U6_17_U2_18.value == "U")
        && (input_letra_A3_18.value == "a" || input_letra_A3_18.value == "A")
        && (input_letra_D4_18.value == "d" || input_letra_D4_18.value == "D")
        && (input_letra_C5_18.value == "c" || input_letra_C5_18.value == "C")
        && (input_letra_O6_18.value == "o" || input_letra_O6_18.value == "O")
        && (input_letra_R7_18.value == "r" || input_letra_R7_18.value == "R")
        && (input_letra_E8_18.value == "e" || input_letra_E8_18.value == "E")) {
        PalavraCorretaQuadCore = true;
    }

    if (PalavraCorretaQuadCore == true) {
        q18.style = "text-decoration: line-through;"
        input_letra_Q1_18.style.backgroundColor = "lightgreen";
        input_letra_U6_17_U2_18.style.backgroundColor = "lightgreen";
        input_letra_A3_18.style.backgroundColor = "lightgreen";
        input_letra_D4_18.style.backgroundColor = "lightgreen";
        input_letra_C5_18.style.backgroundColor = "lightgreen";
        input_letra_O6_18.style.backgroundColor = "lightgreen";
        input_letra_R7_18.style.backgroundColor = "lightgreen";
        input_letra_E8_18.style.backgroundColor = "lightgreen";
    }


    if(PalavraCorretaCS == true &&
    PalavraCorretaRegistradores == true &&
    PalavraCorretai7 == true &&
    PalavraCorretaDualCore == true &&
    PalavraCorretaEprom == true &&
    PalavraCorretaDMA == true &&
    PalavraCorretaThreads == true &&
    PalavraCorretaCache == true &&
    PalavraCorretaAdressBus == true &&
    PalavraCorretaROM == true &&
    PalavraCorretaRAM == true &&
    PalavraCorretaCPU == true &&
    PalavraCorretaULA == true &&
    PalavraCorretaFlash == true &&
    PalavraCorretaMemoria == true &&
    PalavraCorretai5 == true &&
    PalavraCorretaDataBus == true &&
    PalavraCorretaQuadCore == true)
    {
        alert("Você conseguiu completar todas as palavras. Parabéns!")
    }
}