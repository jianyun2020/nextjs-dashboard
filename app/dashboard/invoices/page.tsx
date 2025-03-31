export default async function Page() {

    await new Promise(resolve => {
        setTimeout(() => {
            resolve(1)
        }, 3e3)
    })

    return <p>Invoices</p>
}