"use client"
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type EditorProps = {
    value: string;
    onChange?: (value: string) => void;
    className?: string;
}

export const Editor = ({value, onChange, className}:EditorProps) => {
    const editor = useEditor({
    extensions: [
        StarterKit.configure({
            bulletList: {
                HTMLAttributes: {
                    class: "list-disc pl-4"
                }
            },
            orderedList: {
                HTMLAttributes: {
                    class: "list-decimal pl-4"
                }
            }
        })
    ],
    content: '<p>Hello World! 🌎️</p>',
  })
    return (
        <div>
<EditorContent editor={editor} />
        </div>
    )
}