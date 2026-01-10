import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send, Upload, X, User, Loader2, MapPin, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { uploadFilesToRenoLens, submitContactFormToRenoLens } from "@/lib/renolensApi";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Step 1: Upload files if any
      let imageUrls: string[] = [];
      if (uploadedFiles.length > 0) {
        try {
          imageUrls = await uploadFilesToRenoLens(uploadedFiles);
        } catch (uploadError) {
          console.error("File upload error:", uploadError);
          toast({
            title: "File Upload Error",
            description: "Some files failed to upload, but we'll still submit your form. Please try again if needed.",
            variant: "destructive",
          });
          // Continue with form submission even if file upload fails
        }
      }

      // Step 2: Submit form data to RenoLens
      await submitContactFormToRenoLens(formData, imageUrls);

      // Success - show toast and reset form
      toast({
        title: "Thank you for contacting us!",
        description: "We will get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
      setUploadedFiles([]);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: error instanceof Error 
          ? error.message 
          : "There was an error submitting your form. Please try again or call us.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background scroll-mt-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get Your Free Consultation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's transform your space together. Fill out the form below or give us a call to get started on your refinishing project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-accent/10 via-background to-background overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <div className="w-1 h-8 bg-accent rounded-full"></div>
                    Get In Touch
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all group-hover:scale-110">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Phone</h3>
                        <a href="tel:3238551752" className="text-lg font-semibold text-foreground hover:text-accent transition-colors">
                          (323) 855-1752
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all group-hover:scale-110">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Email</h3>
                        <a href="mailto:gr8glaze@gmail.com" className="text-lg font-semibold text-foreground hover:text-accent transition-colors break-all">
                          gr8glaze@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all group-hover:scale-110">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Location</h3>
                        <p className="text-lg font-semibold text-foreground">
                          San Fernando Valley<br />
                          Los Angeles, CA
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border/50">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Free consultations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Quick response time</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Quality warranties</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-background/95 backdrop-blur-sm">
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground text-sm font-semibold flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          Full Name <span className="text-accent">*</span>
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="h-12 pl-10 border-2 border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-background/50 text-base rounded-lg"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground text-sm font-semibold flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          Phone Number <span className="text-accent">*</span>
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="h-12 pl-10 border-2 border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-background/50 text-base rounded-lg"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Row */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground text-sm font-semibold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Email Address <span className="text-accent">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 pl-10 border-2 border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-background/50 text-base rounded-lg"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Address Row */}
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-foreground text-sm font-semibold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Project Address
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="h-12 pl-10 border-2 border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-background/50 text-base rounded-lg"
                          placeholder="123 Main St, Los Angeles, CA 90001"
                        />
                      </div>
                    </div>

                    {/* Message Row */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground text-sm font-semibold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Project Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="border-2 border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-background/50 text-base rounded-lg resize-none"
                        placeholder="Tell us about your project... What surfaces need refinishing? Any specific colors or preferences?"
                      />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <Label className="text-foreground text-sm font-semibold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Upload Photos <span className="text-muted-foreground font-normal">(Optional)</span>
                      </Label>
                      <div className={`border-2 border-dashed border-border/50 rounded-xl p-8 transition-all group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:border-accent hover:bg-accent/5 cursor-pointer'}`}>
                        <input
                          type="file"
                          id="file-upload"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                          disabled={isSubmitting}
                          className="hidden"
                        />
                        <label
                          htmlFor="file-upload"
                          className={`flex flex-col items-center justify-center ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 shadow-lg">
                            <Upload className="w-8 h-8 text-accent" />
                          </div>
                          <span className="text-base font-semibold text-foreground mb-2">
                            Click to upload or drag and drop
                          </span>
                          <span className="text-sm text-muted-foreground">
                            PNG, JPG, GIF up to 10MB each
                          </span>
                        </label>
                      </div>
                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 space-y-3">
                          {uploadedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-4 border-2 border-border/50 rounded-xl bg-accent/5 hover:bg-accent/10 transition-all"
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                  <Upload className="w-5 h-5 text-accent" />
                                </div>
                                <span className="text-sm text-foreground truncate font-medium">
                                  {file.name}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="ml-3 p-2 hover:bg-accent/20 rounded-lg transition-colors flex-shrink-0"
                                aria-label="Remove file"
                              >
                                <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                            Submitting Your Request...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                            Get Your Free Consultation
                          </>
                        )}
                      </Button>
                      <p className="text-center text-sm text-muted-foreground mt-4">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
