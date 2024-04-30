        // shembuj te krijimi i regex-it
        
        let regex1 = /[a-c]/
        let regex2 = new RegExp ('[a-c]')

        // ekzekutimi i regex-it

        let emri = "j-coders"
        console.log(regex1.exec(emri))

        // "ain" match me Spain ne index 10

        let text = "London, Spain, Paris";
        let result = text.match("ain")
        console.log(result)

        // ...replacement of 'w' with 'ë'

        let texts = "E hwnw!";
        let results = texts.replaceAll("w", "ë");
        console.log(results)

      