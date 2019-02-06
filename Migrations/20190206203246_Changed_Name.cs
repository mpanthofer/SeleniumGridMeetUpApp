using Microsoft.EntityFrameworkCore.Migrations;

namespace MeetUpApp.Migrations
{
    public partial class Changed_Name : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NickName",
                table: "Volunteers",
                newName: "NicName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NicName",
                table: "Volunteers",
                newName: "NickName");
        }
    }
}
