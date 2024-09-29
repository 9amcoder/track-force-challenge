import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import formatAddress from "@/helper/addressFormatter";
import Site from "@/types/site";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, Briefcase, Mail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardProps {
  site: Site | null;
  isMobile?: boolean;
}

const CardComponent: React.FC<CardProps> = ({ site }) => {
  const router = useRouter();

  return (
    <Card className="relative flex flex-col items-center mt-5 md:mt-10 mx-5 md:mx-20">
      <Button
        size="icon"
        variant="outline"
        className="absolute top-1 left-1 md:top-2 md:left-2"
        onClick={() => router.back()}
      >
        <ArrowLeft size={20} />
      </Button>
      <CardHeader className="text-center">
        <CardTitle className="text-lg md:text-xl">
          <div className="flex items-center justify-center">
            {site?.contacts?.main?.firstName} {site?.contacts?.main?.lastName}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center">
            <Briefcase className="mr-2" />
            {site?.contacts?.main?.jobTitle}
          </div>
          <Separator className="mt-5 w-full" />
          <div className="flex items-center justify-center">
            <Phone className="mr-2" />
            {site?.contacts?.main?.phoneNumber}
          </div>
          <Separator className="mt-5 w-full" />
          <div className="flex items-center justify-center">
            <Mail className="mr-2" />
            {site?.contacts?.main?.email}
          </div>
          <Separator className="mt-5 w-full" />
          <div className="flex items-start justify-center text-sm md:text-lg ">
            {formatAddress(site?.address)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
