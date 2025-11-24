const sendCheckout = (plan, price) => {
    console.log('calling the checkout function');

    fetch("/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ plan: plan, price: price })
    }).then((response) => {
        console.log(`response: ${response}`);
        if (response.ok) {
            return response.json()
        }
    }).then((data) => {
        console.log(`data: ${data}`);
        const { url } = data.payload
        window.location.href = url;
    })
}

const goToCheckout = (plan) => {
    switch (plan) {
        case 'basic': {
            console.log('basic plan selected');
            const basic_btn = document.getElementById('basic_btn')
            let price = parseFloat(basic_btn.value)

            sendCheckout(plan, price)
            break;
        }
        case 'pro': {
            console.log('pro plan selected');
            const pro_btn = document.getElementById('pro_btn')
            let price = parseFloat(pro_btn.value)

            sendCheckout(plan, price)
            break;
        }
        case 'enterprise': {
            console.log('enterprise plan selected');
            const enterprise_btn = document.getElementById('enterprise_btn')
            let price = parseFloat(enterprise_btn.value)

            sendCheckout(plan, price)
            break;
        }
        default: {
            console.log('Invalid plan');
            break;
        }
    }

}

