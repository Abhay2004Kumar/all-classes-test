import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import QuizPage from "@/pages/quiz/[exam]";
import QuizSelectPage from "@/pages/quiz/select";
import QuizAd from "@/components/sections/quizAd";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quiz/select" component={QuizSelectPage} />
      <Route path="/quiz/:exam" component={QuizPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <QuizAd />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
