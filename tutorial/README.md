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

自分のマシンで設定して書くこともできます。

注意: **これは完全に任意の項目です。このチュートリアルにおいて必須ではありません。**

これは追加のタスクですが、慣れたエディターで作業をすすめることができるようになります。

もしエディターでの作業がおこのみであれば、以下のステップで可能です。

1. 新しい[Node.js](https://nodejs.org/ja/)のバージョンがインストールされていることを確認して下さい
2. [installation instructions](https://reactjs.org/docs/add-react-to-a-new-app.html)に従って新しいプロジェクトを作成して下さい

```
$ npm install -g create-react-app
$ create-react-app my-app
```

3. 新たなプロジェクトの`src/`ディレクトリ以下のファイルをすべて削除して下さい(中身だけでディレクトリそのものは消さないでください。)

```
$ cd my-app
$ rm -f src/*
```

4. `src/`ディレクトリに[こちらのCSSのコード](https://codepen.io/gaearon/pen/oWWQNa?editors=0100)を入力した`index.css`という名前のファイルを作成してください。
5. `src/`ディレクトリに[こちらのJSのコード](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)を入力した`index.js`という名前のファイルを作成してください。
6. `src/`ディレクトリの`index.js`の上部に次の3行を追加してください。

```JavaScript
import React from 'react';
import React DOM from 'react-dom';
import './index.css';
```

プロジェクトディレクトリ(my-app)にて`npm start`を走らせると、`http://localhost:3000`でブラウザが立ち上がり、○×ゲームのまっさらな状態が見えるでしょう。

エディターのシンタックスハイライトを有効にするために、[以下のインストラクション](http://babeljs.io/docs/editors)に従うことをおすすめします。

### わからなくなった！たすけてくれ！

ハマったときは、[コミュニティーのサポート]()をチェックしてみてください。特に、[Reactiflux chat]は素早くヘルプを得るための素晴らしい手段です。どちらでもいい回答を得られなかった場合は、issueを出してください。手助けすることができます。

これで終わりです！さあ、始めましょう！

<a name="overview"></a>

## 概要

### Reactとは？

Reactはユーザーインターフェースを構築するための、宣言的で効率的で柔軟なJavaScriptライブラリです。

Reactには幾つかの種類のコンポーネントがありますが、まずは`React.Component`のサブクラスから作成していきます。

```JavaScript
class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

// 利用例: <ShoppingList name="Mark">
```

おかしなXMLのようなタグがすぐに目につくでしょう。コンポーネントはReactに対し何かをレンダリングするように命令をします。すると、データに変更があったとき、Reactは効率的にアップデートされ、正しいコンポーネントをレンダリングします。

ShoppingListは**Reactのコンポーネントクラス**、もしくは**Reactのコンポーネントの型**です。コンポーネントは`props`と呼ばれる引数と受取、`render`メソッドによってビューの階層構造を返却します。

この`render`メソッドはなにをレンダリングしたいかということについての__記述__を返却します。そしてReactはその**記述**を受取りスクリーン上にレンダリングします。特に、`render`メソッドがレンダリングすべきものについての軽量な記述を**React element**と呼びます。この**React Element**を簡単に表現するのに、多くのReact開発者はJSXという特殊な文法を利用します。こちらの`<div />`という文法はビルド時に、`React.createElement('div')`というものに変換されます。以下にその実装の例をあげます。

```JavaScript
return React.createElement('div', {className: 'shopping-list'},
    React.createElement('h1', /* ... h1 children ... */),
    React.createElement('ul', /* ... ul children ... */),
);
```

先程のShoppingListを`React.createElement`で記述したものが[こちら](https://babeljs.io/repl/#?presets=react&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRg65cAyiXJVqUADKMmUAGbEATlADepRWSQA6SpiwBfTtwD0fAdwCucc12ANWASUrME1RZmDH7R2_YDqhAhMSACC5J7egtz2APIwVhZIEWDmnlYcnuAQrADc7EA)です。

`createElement()`についてはより詳しく知りたい場合は、[APIリファレンス](https://reactjs.org/docs/react-api.html#createelement)により詳細があります。しかし、このチュートリアルでは直接的に使うことはありません。代わりにJSXを使っていきます。

JSX中には中括弧を用いることでJavaScriptのすべての記述を入れることができます。それぞれのReact elementは実際、様々な変数を入れたり、プログラム中で使い回したりできるようなJavaScriptのオブジェクトです。

`ShoppingList`コンポーネントはDOMコンポーネントのみをレンダリングしていますが、`<ShoppingList />`のように、カスタムReactコンポーネントとして組み合わせて簡単に記述することができます。それぞれのコンポーネントは独立に扱われるためにカプセル化されています。これにより、シンプルなコンポーネントを組み合わせて複雑なUIを構築することが可能となります。

## さあ始めよう

こちらの[Startar Code](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)から始めましょう。

