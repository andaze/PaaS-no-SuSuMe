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

{{< header
    class="my-20 font-bold text-center"
>}}
    {{< div-headerTexts
        title="CONTACT"
        word1="DXに関するご相談、ご依頼、ご質問について"
        word2="お気軽にお問い合わせください"
        title-class="mb-10"
        text-class="text-[15px] lg:text-[40px]"
        strong-class="text-[30px] lg:text-[56px]"
    >}}
{{< /header >}}

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

<div class="text-center">
{{< submit class="transition rounded p-5 lg:p-6 bg-[#078080] text-white hover:text-[#078080] hover:bg-white border border-[#078080]" >}}
</div>

{{< /smtpjs-form >}}


{{< section
    class="bg-gray-100 py-20 lg:py-40 px-2"
>}}
    {{< header
        class="mb-10 font-bold lg:text-center"
    >}}
        {{< div-headerTexts
            title="無料eBook"
            word1="PaaSによるシステムの効果と施策をまとめた"
            strong=""
            word2="PDFを無料で提供しています"
            title-class="mb-8"
            text-class="text-[28px] lg:text-[40px] font-bold"
            strong-class=""
        >}}
    {{< /header >}}

    {{< div-container
        class="py-10 lg:py-20 px-2 lg:px-0 lg:w-11/12 mx-auto"
    >}}
        {{< div-text
            text="無料eBook：PaaSのススメ<br>持続可能なシステムを「安くつくる」技術（2022年度版）"
            class="text-[16px] lg:text-[18px] font-bold leading-9 mb-8"
        >}} 

        {{< div-grid-container 
                class="grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 my-6 lg:my-10"
            >}}
                {{< div-texts >}}
                    {{< div-text
                        text="安価で融通の利くDXについて調べているものの、よくわからないと悩んでいませんか？本書は弊社がPaaSを使った「第三のCRM」でクライアントの課題を解決し、IT投資を成功させてきたノウハウをご紹介しています。"
                        class="text-[16px] lg:text-[18px] leading-9 mb-8"
                    >}} 
                    {{< ul-list 
                        class="ml-7 mb-8 text-[16px] lg:text-[18px]"
                    >}}
                        {{< li-text 
                            text="SaaSのライセンス料を削減し、高度なデータ活用にたどりつく方法"
                            text-class="list-disc mb-4"
                        >}}
                        {{< li-text 
                            text="投資対効果が上がるPaaSデータベースの自己調達法"
                            text-class="list-disc mb-4"
                        >}}
                        {{< li-text 
                            text="ビジネスの変化に追従できるサステナブルなDXとは"
                            text-class="list-disc"
                        >}}
                    {{< /ul-list >}}
                    {{< div-text
                        text="PaaSを使った「第三のCRM」の特徴と、事前に知っておいていただきたい知識などを100ページ超に渡って詳細に解説しています。ぜひ、貴社のDX化にご活用ください。"
                        class="text-[16px] lg:text-[18px] leading-9 mb-8"
                    >}} 
                {{< /div-texts >}}
                {{< picture >}}
            {{< /div-grid-container >}}

    {{< /div-container >}}

{{< /section >}}