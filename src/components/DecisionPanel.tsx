import { useState } from 'react'

const DecisionPanel = ({ placeholder }: { placeholder: string }) => {
    const { title, updateTitle, toggleSave, isSaved } = usePanel()
    return (
        <div className="flex justify-center w-1/2 border-gray-200 border-2 rounded-lg m-2 mt-4">
            <div>

                {isSaved ? <h2>{title}</h2> : <input placeholder={placeholder} value={title} onChange={(e) => updateTitle(e.target.value)} />}
                <button onClick={toggleSave}>save</button>
            </div>
        </div>
    )
}

const usePanel = () => {
    const [title, setTitle] = useState("");
    const [isSaved, setIsSaved] = useState(false)

    const updateTitle = (newTitle: string) => setTitle(newTitle)
    const toggleSave = () => setIsSaved(!isSaved)

    return { title, updateTitle, toggleSave, isSaved }
}

export default DecisionPanel


