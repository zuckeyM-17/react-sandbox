# チュートリアル: Reactことはじめ

## はじめる前に

### なにを作るのか

ここでは、インタラクティブな○×ゲームを作ります。

[こちら](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)でゴールを確認することもできます。
まだこのコードで意味の分からないところがあったり、慣れない文法で書かれているなと感じたりしても心配する必要はありません。このチュートリアルを通して1歩ずつどのようにこのゲームを作るのかを学んでいきましょう。

このゲームで遊んでみると、手の履歴のリストにあるボタンをクリックすると盤面がその手が打たれた直後の状態になっていることがわかると思います。

このゲームについてある程度わかったら、そのタブを閉じて、次のセクションに進み、まずはシンプルなテンプレートからコードを書くのを始めましょう。

### 前提条件

HTMLとJavaScriptについて少し理解していることを仮定して作成していますが、たとえそれらをこれまで使ってこなくても、このチュートリアルを理解することはできます。

JavaScriptについて思い出す必要性を感じているなら、[このガイド](https://developer.mozilla.org/ja/docs/Web/JavaScript/A_re-introduction_to_JavaScript)をおすすめします。注意が必要なのは、JavaScriptの新しい書き方であるES6の文法を一部使っていることです。このチュートリアルにおいて、[アローファンクション](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/arrow_functions)、[クラス構文](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes)、[let](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let)と[const](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const)の宣言を使っています。ES6のコードをコンパイルし、確認するためには[Babel REPL](https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUPGDADkdECChWeASl4AlOMOBQAIgHkAssp0aIySpogoaFBUQmISdC48QA)を利用して下さい。

### この記事を完了させるには

このチュートリアルを完了するには2つの方法があります。コードを、ブラウザ上で書く方法と、ローカル開発環境をマシンに構築してエディタで書く方法です。2つの選択肢から都合が良い方を選択してください。

#### ブラウザで書く場合

始めるのに最も早い方法です！

まず、[こちらのはじめのコード](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)を新しいタブで開きます。○×ゲームのまっさらな状態が見えると思います。このチュートリアルでは、そのコードを編集していきます。

ローカル開発環境の設定が書かれている次のセクションを飛ばして、[概要](#overview)に進むことができます。

#### エディタで書く場合

### わからなくなった！たすけてくれ！

<a name="overview"></a>

## 概要

### Reactとは？
