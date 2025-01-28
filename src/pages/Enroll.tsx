import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/Footer";

const courses = [
  { id: "data-analytics", label: "Data Analytics" },
  { id: "full-stack", label: "Full-Stack Development" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "cloud-computing", label: "Cloud Computing" },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
  isStudent: z.boolean().default(false),
  isNYSC: z.boolean().default(false),
  selectedCourses: z.array(z.string()).min(1, "Please select at least one course"),
  message: z.string().optional(),
});

const EnrollPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      isStudent: false,
      isNYSC: false,
      selectedCourses: [],
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate sending an email
      console.log("Form submitted:", values);
      
      // Show success message
      toast({
        title: "Enrollment Submitted!",
        description: "We'll contact you shortly with next steps.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your enrollment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-techware-gray">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Enroll Now</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="08012345678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex space-x-6">
                  <FormField
                    control={form.control}
                    name="isStudent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">I am a Student</FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isNYSC"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">I am a NYSC Corps Member</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="selectedCourses"
                  render={() => (
                    <FormItem>
                      <FormLabel>Select Courses</FormLabel>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {courses.map((course) => (
                          <FormField
                            key={course.id}
                            control={form.control}
                            name="selectedCourses"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={course.id}
                                  className="flex flex-row items-center space-x-2"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(course.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, course.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== course.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="!mt-0">
                                    {course.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Message (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Any specific requirements or questions?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Submit Enrollment
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnrollPage;
