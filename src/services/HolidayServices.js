var Api = require('../App');
var SERVICE_URL='/holiday';

const headers = {
    kk_sid: localStorage.getItem('token'),
};
var HolidayServices = {



        holidayGet: async function (body,callback,headers) {
            var url=SERVICE_URL+'/all'
            Api.get(

                url,


                function (data) {
                    callback(data);
                },
                function (err) {
                    // errCallback()
                },
                headers
            );
        },


        holidayPost: async function (body,callback,headers) {
            var url=SERVICE_URL+'/create'
            Api.post(
                url,
                body,
                function (data) {
                    callback(data);
                },
                function (err) {
                    //console.log(err)
                },
                headers
            );
        }

    };
export default HolidayServices;