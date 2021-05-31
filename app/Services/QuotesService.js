import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { quotesApi } from "./AxiosServices.js"





class QuotesService{
    async getQuote() {
        console.log("Your get quote service is up")
        // debugger
        let res = await quotesApi.get()//There is an issue here
        console.log(res.data.results)
        res.data.result.forEach(q => {
            ProxyState.quotes.push(new Quote(q))
        });
        ProxyState.quotes = ProxyState.quotes

    }




}

export const quotesService = new QuotesService()



const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

// swalWithBootstrapButtons.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonText: 'Yes, delete it!',
//   cancelButtonText: 'No, cancel!',
//   reverseButtons: true
// }).then((result) => {
//   if (result.isConfirmed) {
//     swalWithBootstrapButtons.fire(
//       'Deleted!',
//       'Your file has been deleted.',
//       'success'
//     )
//   } else if (
//     /* Read more about handling dismissals below */
//     result.dismiss === Swal.DismissReason.cancel
//   ) {
//     swalWithBootstrapButtons.fire(
//       'Cancelled',
//       'Your imaginary file is safe :)',
//       'error'
//     )
//   }
// })