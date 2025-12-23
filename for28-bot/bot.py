from telegram import Update, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

TOKEN = "PASTE_TOKEN_KAMU_DISINI"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "🎵 Éthersound – Romantic Vinyl Player",
        reply_markup={
            "inline_keyboard": [[
                {
                    "text": "🎧 Open Player",
                    "web_app": {"url": "https://ethersound.vercel.app"}
                }
            ]]
        }
    )

app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.run_polling()
