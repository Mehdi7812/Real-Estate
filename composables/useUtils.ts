export const useConvertDatas = () => {
    const estateTypeRender = (type: any) => {
        if(type== 'G') {
            return 'باغ'
        } else if (type == "A") {
            return 'آپارتمان'
        } else if (type == "H") {
            return 'ویلا باغ'
        } else if (type == "L") {
            return 'زمین'
        } else if (type == "B") {
            return 'مغازه و واحد تجاری'
        } else if (type == "V") {
            return 'خانه ویلایی'
        } else{
            return 'انتخاب کنید'
        }
    }
    
    const getNumber = (num: any) => {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + " میلیارد";
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, "") + " میلیون";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, "") + " هزار";
        }
        return num;
    }
    
    const dateCalc = (prevDate: any) => {
        let now = new Date().toJSON()
        let seconds = (Date.parse(now) - Date.parse(prevDate)) / 1000
        let days = Math.floor(seconds / (3600*24))
    
        if(days <= 0) {
            return 'امروز'
        } else if (days >= 1 && days <= 31) {
            return `${days.toLocaleString('fa-ir')} روز پیش`
        } else {
            return `${Math.round(days/31).toLocaleString('fa-ir')} ماه پیش`
        }
    };

    const changeToOptimizedImg = (imgUrl: any) => imgUrl.replace("realSize", "optimized");

    return { estateTypeRender, getNumber, dateCalc, changeToOptimizedImg }
}