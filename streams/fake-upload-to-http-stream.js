import { Readable } from "node:stream"

class OneToHundreadStream extends Readable {
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 5) {
                this.push(null)
            } else {
                const buffer = Buffer.from(String(i))
                this.push(buffer)
            }
        }, 1000)

    }
}

fetch(" ", {
    method: "POST",
    duplex: "half",
    body: new OneToHundreadStream(),
}).then(response => {
    return response.text()
}).then(data => {
    console.log(data)
})
