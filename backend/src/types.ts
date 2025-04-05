
import z from "zod";

export const createTaskInput = z.object({
    options: z.array(z.object({
        imageUrl: z.string()
    })).min(2),
    title: z.string().optional(),
    signature: z.string()
});

export const createSubmissionInput = z.object({
    taskId: z.string(),
    selection: z.string(),
});

declare module "bs58" {
    export function encode(input: Uint8Array): string;
    export function decode(input: string): Uint8Array;
}