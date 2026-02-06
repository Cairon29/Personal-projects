function sendCheckout(plan, price) {
    console.log('calling the checkout function');

    // const endpoint = plan === 'basic' ? "/checkout_bold_button" : "/checkout_bold_api_web"
    const endpoint = "/checkout_bold_link"
    console.log(`Sending request to: ${endpoint}`);

    price = price * 3642.76
    console.log(`plan: ${plan}, price: ${price}`);
    fetch(endpoint, {
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
        if (!data) return;
        console.log(`data.payload: ${data.payload.payment_link}, url: ${data.payload.url}`);
        const { url } = data.payload

        if (!url) {
            console.log('url is not defined but payment went through');
            return
        }
        window.location.href = url;
    })
}

function goToCheckout(plan) {
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

