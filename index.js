//変数を定義
let myInput
let AIInput
let result  = ""

//入力をsessionStrageに保存
function input(input) {
    //自分の出した手を保存
    sessionStorage.setItem("input", String(input))
    sessionStorage.setItem("AIinput", String(Math.floor(Math.random() * 3)))
}

//入力結果をsessionStrageから読みだしてNumber型に
myInput = Number(sessionStorage.getItem("input"))

//相手の出した手をsessionStrageから読みだしてNumber型に
AIInput = Number(sessionStorage.getItem("AIinput"))

//こちらの手と相手の出した手を比較
if(myInput === 0 && AIInput === 1 || myInput === 1 && AIInput === 2 || myInput === 2 && AIInput === 0) {
    //結果を勝利にする
    result = "勝利！！"
} else if(myInput === AIInput) {
    //結果をあいこにする
    result = "あいこ"
} else {
    //結果を敗北にする
    result = "敗北..."
}

//手を数字から文字に変換する関数
function handString(hand) {
    if(hand === 0) {
        return "グー"
    } else if(hand === 1) {
        return "チョキ"
    } else {
        return "パー"
    }
}

//手をそれぞれ文字に変換
myInput = handString(myInput)
AIInput = handString(AIInput)

//出した手を表示
document.getElementById("handResult").innerHTML = ("こちらの出した手:" + myInput + "、相手の出した手:" + AIInput)
//結果を表示
document.getElementById("result").innerHTML = result
