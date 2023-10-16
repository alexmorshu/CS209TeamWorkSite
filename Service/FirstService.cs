namespace CS209CommandWorkSite.Service
{
    public class FirstService
    {
        IWebHostEnvironment _hostEnvironment;
        public FirstService(IWebHostEnvironment hostEnvironment) 
        {
            _hostEnvironment = hostEnvironment;
        }

        public void DoSomething()
        {
            Console.WriteLine("Test");
        }
    }  
}
