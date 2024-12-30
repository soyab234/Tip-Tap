import "./Tiptap.css";
import { useEditor, EditorContent } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
const extensions = [StarterKit, Underline];
const content = ``;
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaCode,
    FaStrikethrough,
} from "react-icons/fa";
import { ImParagraphCenter } from "react-icons/im";
import {
    LuHeading1,
    LuHeading2,
    LuHeading3,
    LuHeading4,
    LuHeading5,
    LuHeading6,
} from "react-icons/lu";
import { PiListBulletsFill } from "react-icons/pi";
import { LuListOrdered } from "react-icons/lu";

export const Tiptap = ({ setContent }) => {
    const editor = useEditor({
        extensions,
        content,
    });
    if (!editor) {
        return null;
    }

    const saveElement = () => {
        if (!editor) {
            console.error("Editor is not initialized.");
            return;
        }

        const html = editor.getHTML();
        setContent(html);
    };
    return (
        <div className="main-container">
            <div className="container">
                <div className="items">
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleBold().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleBold().run()
                        }
                        className={editor.isActive("bold") ? "is-active" : ""}
                    >
                        <FaBold />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleItalic().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleItalic().run()
                        }
                        className={editor.isActive("italic") ? "is-active" : ""}
                    >
                        <FaItalic />
                    </button>

                    <button
                        onClick={() =>
                            editor.chain().focus().setUnderline().run()
                        }
                        disabled={editor.isActive("underline")}
                    >
                        <FaUnderline />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().unsetUnderline().run()
                        }
                        disabled={!editor.isActive("underline")}
                    >
                        Remove <FaUnderline />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleStrike().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleStrike().run()
                        }
                        className={editor.isActive("strike") ? "is-active" : ""}
                    >
                        <FaStrikethrough />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleCode().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleCode().run()
                        }
                        className={editor.isActive("code") ? "is-active" : ""}
                    >
                        <FaCode />
                    </button>

                    <button
                        onClick={() =>
                            editor.chain().focus().setParagraph().run()
                        }
                        className={
                            editor.isActive("paragraph") ? "is-active" : ""
                        }
                    >
                        <ImParagraphCenter />
                    </button>
                    <button
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 1 })
                                .run()
                        }
                        className={
                            editor.isActive("heading", { level: 1 })
                                ? "is-active"
                                : ""
                        }
                    >
                        <LuHeading1 />
                    </button>
                    <button
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 2 })
                                .run()
                        }
                        className={
                            editor.isActive("heading", { level: 2 })
                                ? "is-active"
                                : ""
                        }
                    >
                        <LuHeading2 />
                    </button>
                    <button
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 3 })
                                .run()
                        }
                        className={
                            editor.isActive("heading", { level: 3 })
                                ? "is-active"
                                : ""
                        }
                    >
                        <LuHeading3 />
                    </button>
                    <button
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 4 })
                                .run()
                        }
                        className={
                            editor.isActive("heading", { level: 4 })
                                ? "is-active"
                                : ""
                        }
                    >
                        <LuHeading4 />
                    </button>
                    <button
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 5 })
                                .run()
                        }
                        className={
                            editor.isActive("heading", { level: 5 })
                                ? "is-active"
                                : ""
                        }
                    >
                        <LuHeading5 />
                    </button>
                    <button
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 6 })
                                .run()
                        }
                        className={
                            editor.isActive("heading", { level: 6 })
                                ? "is-active"
                                : ""
                        }
                    >
                        <LuHeading6 />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleBulletList().run()
                        }
                        className={
                            editor.isActive("bulletList") ? "is-active" : ""
                        }
                    >
                        <PiListBulletsFill />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleOrderedList().run()
                        }
                        className={
                            editor.isActive("orderedList") ? "is-active" : ""
                        }
                    >
                        <LuListOrdered />
                    </button>
                </div>
                <hr />
                <div className="edit0r-box">
                    <EditorContent editor={editor} />
                </div>
            </div>
            <button className="save-btn" onClick={saveElement}>
                Save
            </button>
        
        </div>
    );
};
