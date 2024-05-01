import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { toast } from "../../components/ui/use-toast"
import { useNavigate } from 'react-router-dom';

const FormSchema = z.object({
  nom: z.string().min(2, { message: "Nom must be at least 2 characters.", }),
  prenom: z.string().min(2, { message: "prenom must be at least 2 characters.", }),
  adresse: z.string().min(2, { message: "adresse must be at least 2 characters.", }),
  codePostale: z.string().min(2, { message: "codePostale must be at least 2 characters.", }),
  commune: z.string().min(2, { message: "commune must be at least 2 characters.", }),
  tel: z.string().min(2, { message: "tel must be at least 2 characters.", }),
  email: z.string().min(2, { message: "email must be at least 2 characters.", }),
})

const NewClient = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      adresse: "",
      codePostale: "",
      commune: "",
      tel: "",
      email: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    navigate("/mesure"); // Remplacez "/construct" par le chemin exact de votre page

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 p-8">
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="adresse"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Adresse (num + rue)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="codePostale"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Code Postale" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="commune"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Commune/Ville" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="tel"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Téléphone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Créer</Button>
      </form>
    </Form>
  )
}

export default NewClient;