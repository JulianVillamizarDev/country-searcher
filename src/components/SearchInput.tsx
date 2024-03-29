import Image from "next/image"
import { SearchInputProps } from "@/types";

export default function SearchInput({ keyValue, onChange, label, placeholder, icon }: SearchInputProps) {
    return (
        <div key={keyValue} className="bg-primary-50 dark:bg-secondary-50 shadow-md flex items-center p-2">
            <div className="flex items-center justify-center px-4">
                <Image src='./src/assets/search.svg' alt="input-icon" />
            </div>
            <input 
                className="bg-primary-50 dark:bg-secondary-50 text-secondary-200 dark:text-primary-50 p-2 w-full"
                type="text" 
                onChange={onChange} 
                placeholder={placeholder}
                />
        </div>
    )
}