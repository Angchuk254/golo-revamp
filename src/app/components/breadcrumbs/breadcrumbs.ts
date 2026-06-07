import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-container py-3">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a routerLink="/" class="text-decoration-none text-muted">
                <i class="bi bi-house-door-fill me-1"></i>Home
              </a>
            </li>

            @if (parentSection) {
              <li class="breadcrumb-item">
                <a [routerLink]="parentSection.link" class="text-decoration-none text-muted">
                  {{ parentSection.name }}
                </a>
              </li>
            }

            <li class="breadcrumb-item active text-white fw-medium" aria-current="page">
              {{ currentSection }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `,
  styles: [
    `
      .breadcrumb-container {
        background-color: #0b132b;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        color: #fff;
        position: relative;
        z-index: 10;
        margin-top: 0 !important;
        padding-top: 90px !important; /* clears header height and acts as top spacing under navbar */
        padding-bottom: 14px !important;
      }

      .breadcrumb {
        flex-wrap: wrap; /* allow wrapping on narrow screens */
      }

      .breadcrumb-item {
        font-family: 'Inter', sans-serif;
        font-size: 0.85rem;
        letter-spacing: 0.5px;
        white-space: normal;
        word-break: break-word;

        &.active {
          color: var(--color-saffron) !important;
        }

        a {
          transition: color 0.3s ease;
          &:hover {
            color: var(--color-saffron) !important;
          }
        }
      }

      .breadcrumb-item + .breadcrumb-item::before {
        color: rgba(255, 255, 255, 0.3);
        content: '/';
      }

      @media (max-width: 1199.98px) {
        .breadcrumb-container {
          padding-top: 84px !important; /* clears tablet navbar height */
        }
      }

      @media (max-width: 767.98px) {
        .breadcrumb-container {
          padding-top: 80px !important; /* clears mobile navbar height */
        }
        .breadcrumb-item {
          font-size: 0.8rem;
        }
      }
    `,
  ],
})
export class BreadcrumbsComponent {
  @Input() currentSection!: string;
  @Input() parentSection?: { name: string; link: string };
}
