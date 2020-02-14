using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculator.Business;

namespace TaxCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            TaxCalculatorBusiness ob = new TaxCalculatorBusiness();
            Console.BackgroundColor = ConsoleColor.Blue;
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine("*******TAX CALCULATOR*******");
            Console.BackgroundColor = ConsoleColor.Blue;
            Console.WriteLine("\n\nGross Annual Income : ");
            Console.BackgroundColor = ConsoleColor.Black;
            Double income=0;
            bool isParsable = false;
            while (!isParsable)// Handles the Conversion of the  in input
            {
                
                isParsable = Double.TryParse(Console.ReadLine(), out income);//income input
                if (!isParsable)
                {
                    Console.ForegroundColor = ConsoleColor.Red ;
                    Console.WriteLine("Please Enter the input in correct Numeric Format.");
                    Console.ForegroundColor = ConsoleColor.Gray;
                    Console.WriteLine("Enter Again: ");
                }
                if (income < 0)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Input cannot be Negative.");
                    Console.ForegroundColor = ConsoleColor.Gray;
                    Console.WriteLine("Enter Again: ");
                    isParsable = false;

                }
            }
            ob.GrossIncome = income;

            Console.ForegroundColor = ConsoleColor.White;
            Console.BackgroundColor = ConsoleColor.Red;
            Console.WriteLine("\n*NOTE:");
            Console.ForegroundColor = ConsoleColor.Gray;
            Console.BackgroundColor = ConsoleColor.Black;
            Console.WriteLine("The investments u/s 80C that qualify for income tax deduction are:");
            Console.Write("Term Insurance Policies\nUnit Linked Insurance Plans\nTraditional Savings/Endowment Insurance Policies");
            Console.Write("\nRetirement Insurance Plans\n5 year Fixed Deposits\nPublic Provident Fund\nEquity Linked Savings Scheme\n");
            Console.BackgroundColor = ConsoleColor.Blue;
            Console.ForegroundColor = ConsoleColor.White;

            Console.WriteLine("\nDeductions under Sec 80 C :");
            Console.BackgroundColor = ConsoleColor.Black;
            double deduction=0;
            isParsable = false;
            while (!isParsable)// Handles the exception in input
            {

                isParsable = Double.TryParse(Console.ReadLine(), out deduction);// deduction value input
                if (!isParsable)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Please Enter the input in correct Numeric Format.");
                    Console.ForegroundColor = ConsoleColor.Gray;
                    Console.WriteLine("Enter Again: ");
                }
                if (deduction > income && deduction<0)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Deduction amount cannot be greater than Salary or a negative value");
                    Console.ForegroundColor = ConsoleColor.Gray;
                    Console.WriteLine("Enter Again: ");
                    isParsable = false;

                }
                
            }
            ob.Deduction = deduction; // object creation
            double taxableIncomeResult=ob.TaxableIncome();// taxable income calculation
            double[] resultSlab= new double[3];
            Double taxResult=ob.TaxPayable(out resultSlab); // tax total calculation
            Console.Clear();
            // Result Display code
            Console.WriteLine("Tax Calculation Result: \n");
            Console.BackgroundColor = ConsoleColor.Blue;
            Console.Write("Gross Income:");
            Console.BackgroundColor = ConsoleColor.Black;
            Console.Write(" Rs." + income + "\n\n");
            Console.BackgroundColor = ConsoleColor.Blue;
            Console.Write("Deduction Amount(u/s 80c):");
            Console.BackgroundColor = ConsoleColor.Black;
            Console.Write(" Rs." + deduction + "\n\n");
            Console.BackgroundColor = ConsoleColor.Blue;
            Console.Write("Taxable Income:");
            Console.BackgroundColor = ConsoleColor.Black;
            Console.Write(" Rs."+taxableIncomeResult+"\n");
            Console.Write("\nTax Slab Breakdown:\n\n");
            Console.BackgroundColor = ConsoleColor.White;
            Console.ForegroundColor = ConsoleColor.Black;
            for (int i = 0; i < 3; i++)
            {
                Console.Write(" Tax under slab {0} : ", (i + 1));
                Console.WriteLine(resultSlab[i]);
            }

            Console.BackgroundColor = ConsoleColor.Red;
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("\nTOTAL TAX: ");
            Console.Write("Rs."+ taxResult);
            Console.ReadKey();
        }
    }
}
