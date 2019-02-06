using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetUpApp.Context;
using MeetUpApp.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MeetUpApp.Controllers
{
    public class VolunteerController : Controller
    {
        private readonly VolunteerContext _context;

        public VolunteerController (VolunteerContext context)
        {
            _context = context;
        }

        // GET: /<controller>/
        public IActionResult VolunteerSignup()
        {
            return View();
        }

        // POST: VolunteerCrud/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> SaveVolunteer([Bind("Name,NicName,Age,Ethnicity,Email,PhoneNumber")] Volunteer volunteer)
        {
            if (ModelState.IsValid)
            {
                _context.Add(volunteer);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(VolunteerSaveSuccess));
            }
            return View();
        }

        public IActionResult VolunteerSaveSuccess()
        {
            return View();
        }
    }
}
