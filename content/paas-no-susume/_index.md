---
title: "Paas No Susume"
date: 2022-10-11T11:28:42+09:00
draft: false
isSmtpJs: true
---

<!-- title, subtitle, description, img-path -->
<!-- title, subtitle, description, img-path -->
<!-- title, subtitle, description, img-path -->
<!-- title, subtitle, description, img-path -->

{{< smtpjs-form >}}
<!-- todo: input系(input,select,textarea) をショートコード化する -->
<div>
    {{< label text="姓" name="full_name" required="true" >}}
    <input
        class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
        id="full_name" name="full_name" type="text" placeholder="Example : 新井" required>
</div>

<div>
    {{< label text="名" name="last_name" required="true" >}}
    <input
        class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
        id="last_name" name="last_name" type="text" placeholder="Example : 美奈" required>
</div>

<div>
    {{< label text="会社名" name="company_name" required="true" >}}
    <input
        class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
        id="company_name" name="company_name" type="text" placeholder="Example : アンダース" required>
</div>

<div>
    {{< label text="メールアドレス" name="email" required="true" >}}
    <input
        class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
        id="email" name="email" type="text" placeholder="Example : andaze@example.com" required>
</div>

<div>
    {{< label text="電話番号" name="contact_number" >}}
    <input
        class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
        id="contact_number" name="contact_number" type="text" placeholder="Example : 1234567890">
</div>

<div>
    {{< label text="部門" name="department" required="true" >}}
    <select name="department"
        class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
        id="department"
        required
    >
        <option class="text-gray-500 bg-gray-100 bg-opacity-50" selected>--選択してください--</option>
        <option value="経営全般">経営全般</option>
        <option value="営業">営業</option>
        <option value="マーケティング・広報・企画">マーケティング・広報・企画</option>
        <option value="情報システム">情報システム</option>
        <option value="人事・総務">人事・総務</option>
        <option value="その他">その他</option>
    </select>
</div>

<div>
    {{< label text="役職" name="post" required="true" >}}
    <select name="post"
        class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
        id="post"
        required
    >
        <option class="text-gray-500 bg-gray-100 bg-opacity-50" selected>--選択してください--</option>
        <option value="経営者・役員">経営者・役員</option>
        <option value="部長クラス">部長クラス</option>
        <option value="課長・係長・主任クラス">課長・係長・主任クラス</option>
        <option value="一般社員">一般社員</option>
        <option value="個人">個人</option>
        <option value="学生">学生</option>
        <option value="その他">その他</option>
    </select>
</div>

<div>
    {{< label text="お問い合わせ内容" name="inquiry_content" required="true" >}}
    <textarea
        class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
        rows="6" name="inquiry_content" id="inquiry_content" placeholder="2,000字以内でお書きください。"></textarea>
</div>

{{< agreement-to-terms >}}

<div>
    <button type="submit">
        ▶︎　同意の上、入力内容を送信
    </button>
</div>

{{< /smtpjs-form >}}


{{< section
    class="bg-gray-100 text-center py-40"
>}}
    {{< header >}}
        {{< div-headerTexts
            title = "FAQ"
            text = "よくある質問"
        >}}
    {{< /header >}}

    {{< div-faq-block >}}
        {{< div-faq-content
            title="Q"
            text="会社が東京から離れた場所にありますが、サポートを受けられますか？"
        >}}
        {{< div-faq-content
            title="A"
            text="はい、弊社クライアントは全国にいらっしゃいますのでご安心ください。お打ち合わせはweb会議で行いますので、東京以外の会社様の案件でも対応可能です。"
        >}}
    {{< /div-faq-block >}}

    {{< div-faq-block >}}
        {{< div-faq-content
            title="Q"
            text="他のSaaSからの置き換えの場合、どんな準備が必要ですか？"
        >}}
        {{< div-faq-content
            title="A"
            text="まずは社内各部署が保有する、すべてのSaaSやパッケージの調査（使用頻度や影響度などを明記）とリストアップをいたします。調査結果によっては、現状システムの継続利用をご提案させていただくこともあります。"
        >}}
    {{< /div-faq-block >}}

    {{< div-faq-block >}}
        {{< div-faq-content
            title="Q"
            text="すべてではなく、一部のSaaSのみ置き換えをお願いできますか？"
        >}}
        {{< div-faq-content
            title="A"
            text="もちろんです。一部機能のシステム開発を弊社でご支援できます。"
        >}}
    {{< /div-faq-block >}}

    {{< div-faq-block >}}
        {{< div-faq-content
            title="Q"
            text="DXに関して相談できますか？"
        >}}
        {{< div-faq-content
            title="A"
            text="DXに関するコンサルティングサービスを行っています。DX推進についてまずはお気軽にご相談ください。コンサルティングは相応の料金をいただいておりますが、ご相談は無料で行っています。"
        >}}
    {{< /div-faq-block >}}

    {{< div-faq-block >}}
        {{< div-faq-content
            title="Q"
            text="業界ごとに上手くいく場合と、上手くいかない場合があるのでしょうか？"
        >}}
        {{< div-faq-content
            title="A"
            text="基本的には、どんな業界や職種でも、どんな複雑なワークフローにでも、制約なく開発することができます。外部システムとの連携も制限はありません。他社製品に不満をお持ちの企業様でも、ご満足いただけるシステムを構築することが可能です。"
        >}}
    {{< /div-faq-block >}}
{{< /section >}}
