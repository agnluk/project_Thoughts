import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';              {/*API route in Next.js*/}

export const POST = async (req) => {
    const { userId, prompt, tag} = await req.json();  //extract all of data that pass throu POST request

    try {
        await connectToDB();
        const newPrompt = new Prompt({
             creator: userId,
             prompt, 
             tag
            })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to connect a new prompt", { status: 500 })
    }
}