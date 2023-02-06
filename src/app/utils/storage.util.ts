
// the utility functions for accessing the browser storage - trainer info
// the key is the id of the trainer, the values is name, favourite pokemon and id
// the key value is defined in the /src/app/enums/storage-keys.enum.ts
export class StorageUtil {

    public static storageSave<T>(key: string, value: T): void{
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    
    public static storageRead<T>(key: string): T | undefined {
        const storedValue = sessionStorage.getItem(key);
        try {
            if(storedValue){
                return JSON.parse(storedValue);
            } else {
                return undefined;
            }
        } catch (error) {
            sessionStorage.removeItem(key);
            return undefined;
        }
    }
}
