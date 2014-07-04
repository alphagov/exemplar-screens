var data = {
  "exemplar_number": 4,
  "exemplar_name": "Patent renewals",
  "last-updated": "24 June 2014",
  "userjourneys": [
    {
      "title": "Renew 2 patents and pay by debit card",
      "path": [{
        "caption": "Enter patent number",
        "imgref": "images/1.patent-number.png",
        "note": "User enters patent number and clicks the 'Next button'."
      },{
        "caption": "View patent details",
        "imgref": "images/2.patent-details.png",
        "note": [
          "User views patent details and clicks 'Add another'.",
          "If they click 'Remove' it just removes the patent."
        ]
      },{
        "caption": "Add another patent",
        "imgref": "images/3.add-another.png",
        "note": "User enters another patent number."
      },{
        "caption": "Add renewal details",
        "imgref": "images/4.add-renewal-details.png",
        "note": "User fills out the details on the rest of the page.",
        "tags": ['Add, edit, delete']
      },{
        "caption": "Choose payment method",
        "imgref": "images/5.payment-method.png",
        "note": "User chooses debit or credit card.",
        "tags": ['Payment method']
      },{
        "caption": "IPO number?",
        "imgref": "images/6.IPO-number.png",
        "note": "User is asked for an optional IPO number."
      },{
        "caption": "Add IPO number",
        "imgref": "images/7.add-IPO-number.png",
        "note": "User enters IPO number."
      },{
        "caption": "Payment",
        "imgref": "images/8.payment.png",
        "note": "User enters payment details into ATOS website.",
        "tags": ['Payment details']
      }]
    },    {
      "title": "Pay by IPO deposit account",
      "path": [{
        "caption": "Choose payment method",
        "imgref": "images/5.payment-method.png",
        "note": "Previous screens are as per scenario 1. User chooses IPO deposit account."
      },{
        "caption": "IPO details",
        "imgref": "images/9.IPO-deposit-account-details.png",
        "note": ""
      }]
    },    {
      "title": "User doesn't know patent number",
      "path": [{
        "caption": "Enter patent number",
        "imgref": "images/1.patent-number.png",
        "note": "User doesn't know number, so they click the link."
      },{
        "caption": "IPO details",
        "imgref": "images/10.search-for-patent.png",
        "note": "User is taken to different website."
      }]
    }
  ]}