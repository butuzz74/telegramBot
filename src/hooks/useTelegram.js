const tg = window.Telegram.WebApp;

const onReady = () => {
    tg.ready()
}
const onClose = () => {
    tg.close()
}
const useTelegram = {
tg, 
ready: onReady,
close: onClose,
user: tg.initDataUnsafe?.user?.username,
queryId: tg.initDataUnsafe?.query_id

}
export default useTelegram